import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CheckCircle2,
  Download,
  FileText,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import SignaturePad, { SignatureValue } from "@/components/SignaturePad";
import {
  buildPdfFilename,
  generateFilledConsentPdf,
} from "@/lib/generateConsentPdf";

const SUBMISSION_URL = "https://drkale-consent.email-060.workers.dev";

type FormState = {
  studentName: string;
  studentDob: string;
  schoolDistrict: string;
  parentName: string;
  parentPrintedName: string;
  parentRelationship: string;
  signatureDate: string;
};

const todayIso = () => new Date().toISOString().slice(0, 10);

const todayDisplay = () => {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${mm}/${dd}/${d.getFullYear()}`;
};

export default function RecordingConsent() {
  const [formData, setFormData] = useState<FormState>({
    studentName: "",
    studentDob: "",
    schoolDistrict: "",
    parentName: "",
    parentPrintedName: "",
    parentRelationship: "",
    signatureDate: todayDisplay(),
  });

  const [signature, setSignature] = useState<SignatureValue>({ type: null });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [downloadBlobUrl, setDownloadBlobUrl] = useState<string | null>(null);
  const [downloadFilename, setDownloadFilename] = useState<string>(
    "Recording_Consent.pdf"
  );

  const update = (k: keyof FormState) => (v: string) =>
    setFormData((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (signature.type === null) {
      toast.error(
        "Please add your signature before submitting (draw or type your name)."
      );
      return;
    }

    setIsSubmitting(true);
    try {
      // Build the filled PDF in the browser
      const pdfBytes = await generateFilledConsentPdf({
        studentName: formData.studentName,
        studentDob: formData.studentDob,
        schoolDistrict: formData.schoolDistrict,
        parentName: formData.parentName,
        parentPrintedName: formData.parentPrintedName,
        parentRelationship: formData.parentRelationship,
        signatureDate: formData.signatureDate,
        parentSignatureType: signature.type,
        parentSignatureValue: signature.value,
      });

      const filename = buildPdfFilename({
        studentName: formData.studentName,
        studentDob: formData.studentDob,
        schoolDistrict: formData.schoolDistrict,
        parentName: formData.parentName,
        parentPrintedName: formData.parentPrintedName,
        parentRelationship: formData.parentRelationship,
        signatureDate: formData.signatureDate,
        parentSignatureType: signature.type,
        parentSignatureValue: signature.value,
      });

      // Build a Blob the parent can download from the success screen
      // pdfBytes is a Uint8Array; pass its underlying buffer to Blob
      const pdfBlob = new Blob([pdfBytes.buffer as ArrayBuffer], {
        type: "application/pdf",
      });

      // Submit to our Cloudflare Worker, which forwards to Resend.
      const submission = new FormData();
      submission.append("student_name", formData.studentName);
      submission.append("student_dob", formData.studentDob);
      submission.append("school_district", formData.schoolDistrict);
      submission.append("parent_name", formData.parentName);
      submission.append("parent_printed_name", formData.parentPrintedName);
      submission.append("parent_relationship", formData.parentRelationship);
      submission.append("signature_date", formData.signatureDate);
      submission.append(
        "signature_method",
        signature.type === "drawn" ? "drawn" : "typed"
      );
      submission.append("attachment", pdfBlob, filename);
      // Honeypot — bots fill this, humans don't
      submission.append("botcheck", "");

      const response = await fetch(SUBMISSION_URL, {
        method: "POST",
        body: submission,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Submission failed");
      }

      // Build a download URL for the parent's records
      const blobUrl = URL.createObjectURL(pdfBlob);
      setDownloadBlobUrl(blobUrl);
      setDownloadFilename(filename);
      setSubmitted(true);
      toast.success("Authorization submitted. Thank you.");
    } catch (err) {
      console.error(err);
      toast.error(
        "Something went wrong submitting the form. Please try again, or call our office at 860-561-5453."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <section className="py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="pt-10 pb-10 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-8 w-8 text-green-700" />
                  </div>
                  <h1 className="text-3xl font-bold mb-3">
                    Authorization Submitted
                  </h1>
                  <p className="text-muted-foreground mb-6">
                    Thank you. Your completed authorization form has been sent
                    securely to Dr. Kale's office. You will receive a copy of
                    your child's evaluation report when it is finalized.
                  </p>
                  <p className="text-sm text-muted-foreground mb-8">
                    We recommend saving a copy of the completed form for your
                    own records.
                  </p>
                  {downloadBlobUrl && (
                    <a
                      href={downloadBlobUrl}
                      download={downloadFilename}
                      className="inline-flex"
                    >
                      <Button size="lg" variant="default">
                        <Download className="h-5 w-5 mr-2" />
                        Download My Copy
                      </Button>
                    </a>
                  )}
                  <p className="text-sm text-muted-foreground mt-8">
                    Questions? Call 860-561-5453 or email{" "}
                    <a
                      href="mailto:email@drkale.net"
                      className="text-primary underline"
                    >
                      email@drkale.net
                    </a>
                    .
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/30 to-background py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Authorization for Session Recording and Clinical Documentation
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Independent Psychiatric Evaluation — School-Based Services
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* HIPAA / Privacy notice */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-5 pb-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-foreground/80">
                    <p className="font-semibold mb-1">
                      Before you submit this form
                    </p>
                    <p>
                      This form is transmitted through the same contact channel
                      used for general inquiries to our office. If your school
                      district has provided a SharePoint portal for submitting
                      this form, that channel offers stronger privacy
                      protection. You may submit through whichever method your
                      district recommends.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* The full consent text */}
            <Card>
              <CardContent className="pt-6 pb-6 space-y-5 text-sm md:text-base text-foreground/85 leading-relaxed">
                <div>
                  <h2 className="text-lg font-bold text-primary mb-2">
                    1. Purpose of This Authorization
                  </h2>
                  <p className="mb-2">
                    As part of the independent psychiatric evaluation arranged
                    by your school district, Dr. Milind Kale, MD will conduct a
                    comprehensive clinical assessment of your child. To support
                    the accuracy and thoroughness of this evaluation, Dr. Kale
                    may audio-record the psychiatric evaluation session and,
                    where applicable, relevant school team meetings in which
                    your family participates.
                  </p>
                  <p>
                    These recordings are used exclusively to support Dr. Kale's
                    clinical work. They assist in the preparation of accurate
                    session notes, the psychiatric evaluation report, and any
                    related clinical correspondence. All conclusions, diagnostic
                    impressions, and recommendations contained in the final
                    report reflect Dr. Kale's independent clinical judgment and
                    professional assessment. Dr. Kale takes full personal and
                    professional responsibility for all findings and
                    recommendations.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-primary mb-2">
                    2. How Your Information Is Protected
                  </h2>
                  <p className="mb-2">
                    The privacy and security of your child's information are
                    our highest priorities. All recordings, clinical notes, and
                    documentation associated with this evaluation are protected
                    health information (PHI) under the Health Insurance
                    Portability and Accountability Act of 1996 (HIPAA). HIPAA
                    protections apply from the moment a recording begins
                    through final storage and eventual deletion — there is no
                    point in this process at which your information is outside
                    HIPAA-compliant protection.
                  </p>
                  <p className="mb-2">
                    Specifically, your child's information will be:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Transmitted and stored exclusively on HIPAA-compliant,
                      encrypted systems
                    </li>
                    <li>
                      Accessible only to Dr. Kale and authorized members of
                      your child's care and evaluation team
                    </li>
                    <li>
                      Never shared with any third party, vendor, or outside
                      organization for any purpose other than your child's
                      evaluation and care
                    </li>
                    <li>
                      Never used for research, training, marketing, or any
                      commercial purpose
                    </li>
                    <li>
                      Protected by the same confidentiality standards that
                      govern all medical records
                    </li>
                    <li>
                      Permanently deleted from all systems once clinical
                      documentation is complete and verified
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-primary mb-2">
                    3. What Is Recorded
                  </h2>
                  <p className="mb-2">
                    This authorization covers audio recording of the following,
                    as applicable to your child's evaluation:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      The psychiatric evaluation session conducted by Dr.
                      Milind Kale, MD
                    </li>
                    <li>
                      School team meetings or Individualized Education Program
                      (IEP) meetings in which the family participates as part
                      of the evaluation process
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-primary mb-2">
                    4. Documentation and Clinical Responsibility
                  </h2>
                  <p className="mb-2">
                    Recordings are used to support the preparation of accurate
                    clinical documentation. Advanced documentation tools may
                    assist in transcribing or organizing session content;
                    however, all clinical notes, findings, and the final
                    psychiatric evaluation report are reviewed, edited, and
                    approved by Dr. Kale personally before they are finalized.
                  </p>
                  <p>
                    Dr. Kale takes full clinical and professional responsibility
                    for all content in the evaluation report. All diagnostic
                    impressions, risk assessments, and recommendations
                    represent his independent professional judgment. No
                    automated tool, system, or third party determines or
                    influences the clinical conclusions of this evaluation.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-primary mb-2">
                    5. Retention and Deletion of Recordings
                  </h2>
                  <p>
                    Raw recordings are retained only for the minimum period
                    necessary to complete and verify clinical documentation.
                    Once documentation is finalized, recordings are permanently
                    and securely deleted. The final clinical report and
                    associated notes are retained as part of your child's
                    medical record in accordance with applicable Connecticut
                    and federal record-keeping requirements.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-primary mb-2">
                    6. Your Rights
                  </h2>
                  <p className="mb-2">
                    Your participation in recording is entirely voluntary. As a
                    parent or legal guardian, you have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Decline recording at any time without affecting your
                      child's access to services or the quality of the
                      evaluation
                    </li>
                    <li>
                      Withdraw this authorization at any time by notifying Dr.
                      Kale or the school district in writing
                    </li>
                    <li>
                      Request deletion of any recording associated with your
                      child's evaluation
                    </li>
                    <li>
                      Receive a copy of your child's clinical records and
                      evaluation report upon written request
                    </li>
                    <li>
                      File a complaint with the U.S. Department of Health and
                      Human Services if you believe your HIPAA rights have been
                      violated
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* The form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <Card>
                <CardContent className="pt-6 pb-6 space-y-6">
                  <h2 className="text-xl font-bold">
                    Student and Family Information
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="studentName">
                        Student Full Name{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="studentName"
                        value={formData.studentName}
                        onChange={(e) => update("studentName")(e.target.value)}
                        required
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <Label htmlFor="studentDob">
                        Date of Birth{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="studentDob"
                        type="text"
                        placeholder="MM/DD/YYYY"
                        value={formData.studentDob}
                        onChange={(e) => update("studentDob")(e.target.value)}
                        required
                        autoComplete="off"
                        pattern="\d{1,2}/\d{1,2}/\d{4}"
                        title="Format: MM/DD/YYYY"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="schoolDistrict">
                        School District{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="schoolDistrict"
                        value={formData.schoolDistrict}
                        onChange={(e) =>
                          update("schoolDistrict")(e.target.value)
                        }
                        required
                        placeholder="e.g., Glastonbury Public Schools"
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <Label htmlFor="parentName">
                        Parent or Legal Guardian Name{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => update("parentName")(e.target.value)}
                        required
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 pb-6 space-y-5">
                  <h2 className="text-xl font-bold">
                    Authorization and Signature
                  </h2>

                  <p className="text-sm text-foreground/80 leading-relaxed">
                    By signing below, I confirm that I have read and understood
                    this authorization form. I voluntarily consent to the audio
                    recording of my child's psychiatric evaluation session and,
                    where applicable, school team meetings in which my family
                    participates, as described above. I understand that all
                    recordings are protected under HIPAA from end to end, that
                    they will be deleted upon completion of documentation, and
                    that the final evaluation report reflects the independent
                    clinical judgment and full professional responsibility of
                    Dr. Milind Kale, MD. I understand that I may withdraw this
                    authorization at any time.
                  </p>

                  <div>
                    <Label>
                      Signature of Parent or Legal Guardian{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <SignaturePad
                      onChange={setSignature}
                      defaultTypedName={formData.parentName}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="parentPrintedName">
                        Printed Name of Parent or Legal Guardian{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="parentPrintedName"
                        value={formData.parentPrintedName}
                        onChange={(e) =>
                          update("parentPrintedName")(e.target.value)
                        }
                        required
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <Label htmlFor="parentRelationship">
                        Relationship to Student{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="parentRelationship"
                        value={formData.parentRelationship}
                        onChange={(e) =>
                          update("parentRelationship")(e.target.value)
                        }
                        required
                        placeholder="Mother, Father, Guardian, etc."
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="signatureDate">
                      Date <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="signatureDate"
                      type="text"
                      placeholder="MM/DD/YYYY"
                      value={formData.signatureDate}
                      onChange={(e) =>
                        update("signatureDate")(e.target.value)
                      }
                      required
                      autoComplete="off"
                      className="md:max-w-xs"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting…" : "Submit Authorization"}
                </Button>
                <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1.5">
                  <Lock className="h-3 w-3" />
                  Submitted via the same secure channel as our contact form.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
