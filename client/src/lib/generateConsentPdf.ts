/**
 * Recording Authorization Consent — PDF Generator
 *
 * Loads the static fillable template at /consent-form-template.pdf,
 * fills the AcroForm fields with the parent's submission data,
 * embeds a drawn signature image when provided, and flattens the
 * form so the resulting PDF is non-editable documentation.
 *
 * Returns a Uint8Array suitable for use as a Blob attachment.
 */

import { PDFDocument } from "pdf-lib";

export type ConsentFormData = {
  studentName: string;
  studentDob: string;
  schoolDistrict: string;
  parentName: string;
  /** "typed" => parentSignatureValue is the typed name string.
   *  "drawn" => parentSignatureValue is a PNG data URL. */
  parentSignatureType: "typed" | "drawn";
  parentSignatureValue: string;
  signatureDate: string;
  parentPrintedName: string;
  parentRelationship: string;
};

const TEMPLATE_URL = "/consent-form-template.pdf";

export async function generateFilledConsentPdf(
  data: ConsentFormData
): Promise<Uint8Array> {
  // Fetch and load the template
  const templateBytes = await fetch(TEMPLATE_URL).then((r) => {
    if (!r.ok) {
      throw new Error(
        `Could not load consent form template (status ${r.status}). ` +
          `Check that consent-form-template.pdf is deployed to the site root.`
      );
    }
    return r.arrayBuffer();
  });

  const pdfDoc = await PDFDocument.load(templateBytes);
  const form = pdfDoc.getForm();

  // Set all standard text fields
  form.getTextField("student_name").setText(data.studentName);
  form.getTextField("student_dob").setText(data.studentDob);
  form.getTextField("school_district").setText(data.schoolDistrict);
  form.getTextField("parent_name").setText(data.parentName);
  form.getTextField("parent_signature_date").setText(data.signatureDate);
  form.getTextField("parent_printed_name").setText(data.parentPrintedName);
  form.getTextField("parent_relationship").setText(data.parentRelationship);

  // Capture the signature field's bounding rectangle BEFORE flatten so we
  // can draw a signature image on top later (drawing before flatten causes
  // the flattened empty field's appearance to overlay the image).
  let signatureRect: { x: number; y: number; width: number; height: number } | null = null;

  if (data.parentSignatureType === "typed") {
    // Typed signature: just set the field value before flatten
    form.getTextField("parent_signature").setText(data.parentSignatureValue);
  } else {
    // Drawn signature: capture rect now, draw image after flatten
    const sigField = form.getTextField("parent_signature");
    const widgets = sigField.acroField.getWidgets();
    if (widgets.length > 0) {
      signatureRect = widgets[0].getRectangle();
    }
  }

  // Bake the field values into the page content so the resulting PDF
  // cannot be edited as a form
  form.flatten();

  // Now draw the signature image on top of the (now-flattened) field area
  if (data.parentSignatureType === "drawn" && signatureRect) {
    const pages = pdfDoc.getPages();
    // The v2 template places the signature on page 2 (index 1).
    const targetPage = pages[1] ?? pages[0];

    const pngBytes = dataUrlToUint8Array(data.parentSignatureValue);
    const pngImage = await pdfDoc.embedPng(pngBytes);

    // Fit image inside field with small padding, preserving aspect ratio
    const padding = 4;
    const availW = signatureRect.width - padding * 2;
    const availH = signatureRect.height - padding * 2;
    const scale = Math.min(availW / pngImage.width, availH / pngImage.height);
    const drawWidth = pngImage.width * scale;
    const drawHeight = pngImage.height * scale;

    targetPage.drawImage(pngImage, {
      x: signatureRect.x + (signatureRect.width - drawWidth) / 2,
      y: signatureRect.y + (signatureRect.height - drawHeight) / 2,
      width: drawWidth,
      height: drawHeight,
    });
  }

  // Document metadata for archival
  pdfDoc.setTitle(
    `Recording Authorization — ${data.studentName} (${data.parentPrintedName})`
  );
  pdfDoc.setSubject("Parent or Legal Guardian Authorization for Recording");
  pdfDoc.setAuthor(data.parentPrintedName);
  pdfDoc.setKeywords([
    "authorization",
    "recording",
    "consent",
    data.schoolDistrict,
  ]);
  pdfDoc.setProducer("drkale.net web form");
  pdfDoc.setCreationDate(new Date());

  return await pdfDoc.save();
}

function dataUrlToUint8Array(dataUrl: string): Uint8Array {
  const commaIdx = dataUrl.indexOf(",");
  if (commaIdx < 0) {
    throw new Error("Invalid data URL");
  }
  const base64 = dataUrl.slice(commaIdx + 1);
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

/** Build a filename like `Recording_Consent_Smith_Jane_2026-05-03.pdf` */
export function buildPdfFilename(data: ConsentFormData): string {
  const safe = (s: string) =>
    s.trim().replace(/[^A-Za-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  const today = new Date().toISOString().slice(0, 10);
  return `Recording_Consent_${safe(data.studentName)}_${today}.pdf`;
}
