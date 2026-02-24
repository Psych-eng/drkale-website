import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Scale, Clock, Shield, FileText, CheckCircle, AlertTriangle } from "lucide-react";

export default function ManifestationDetermination() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/30 to-background py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Manifestation Determination Reviews
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Independent psychiatric expertise for one of special education's most legally sensitive and time-critical decisions.
            </p>
            <Link href="/contact">
              <Button size="lg">Request a Consultation</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What is an MDR */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What Is a Manifestation Determination Review?</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Under the Individuals with Disabilities Education Act (IDEA), when a school district intends to suspend a student with a disability for more than 10 consecutive school days, or to change their placement as a result of a disciplinary action, the district must convene a Manifestation Determination Review (MDR) within 10 school days.
          </p>
          <p className="text-foreground/80 mb-4">
            The MDR team — which includes the parent, relevant members of the IEP team, and the district — must answer two critical questions:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3 text-primary">Question 1</h3>
                <p className="text-foreground/80">Was the conduct in question caused by, or did it have a direct and substantial relationship to, the student's disability?</p>
              </CardContent>
            </Card>
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3 text-primary">Question 2</h3>
                <p className="text-foreground/80">Was the conduct in question the direct result of the district's failure to implement the student's IEP?</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-muted-foreground mt-6">
            If the answer to either question is yes, the behavior is considered a manifestation of the disability and the district cannot proceed with the proposed disciplinary action without significant legal risk.
          </p>
        </div>
      </section>

      {/* Why Independent Psychiatric Review */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why an Independent Psychiatric Review Protects Your District</h2>
          <p className="text-lg text-muted-foreground mb-8">
            MDR decisions are among the most legally scrutinized actions a district can take. The question of whether a behavior is a manifestation of a disability is fundamentally a clinical question — one that is best answered by an independent, board-certified psychiatrist rather than by the district's internal team alone.
          </p>
          <div className="space-y-4">
            {[
              {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Reduces Legal Exposure",
                desc: "An independent psychiatric evaluation demonstrates that your district conducted a thorough, clinically grounded MDR — not simply a procedural checkbox exercise. This is critical protection against due process complaints and OCR investigations.",
              },
              {
                icon: <Scale className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Provides an Objective Clinical Opinion",
                desc: "When internal team members have been managing a difficult student situation, objectivity can be compromised. An independent psychiatrist has no prior relationship with the student or family, ensuring an unbiased clinical determination.",
              },
              {
                icon: <FileText className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Produces Legally Defensible Documentation",
                desc: "My written report documents the clinical reasoning behind the manifestation determination, including the specific diagnostic criteria, behavioral analysis, and IEP review that informed the conclusion.",
              },
              {
                icon: <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Identifies Missed Diagnoses or IEP Gaps",
                desc: "MDR evaluations frequently reveal underlying psychiatric conditions that were not previously identified, or IEP services that were inadequate or not implemented — information that is critical for future planning regardless of the disciplinary outcome.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-5 pb-5">
                  <div className="flex items-start gap-4">
                    {item.icon}
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The 10-Day Timeline */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <Clock className="h-12 w-12 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4">The 10-School-Day Clock Is Already Running</h2>
              <p className="text-muted-foreground mb-4">
                Once a disciplinary action triggering MDR requirements is taken, the district has just 10 school days to convene the review. This leaves very limited time to arrange an independent psychiatric evaluation, gather records, conduct interviews, and produce a written report.
              </p>
              <p className="text-foreground/80 font-medium">
                Contact me as soon as a disciplinary situation arises — ideally before or on the same day as the removal — so we can work within your timeline.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-bold text-amber-800 mb-2">Expedited Review Available</h3>
            <p className="text-amber-700 text-sm">
              Given the strict legal timeline, I offer expedited MDR consultations and evaluations. Initial phone consultation is typically available within 24 hours of contact. Written reports can be produced within 3–5 business days when all records and interviews are completed promptly.
            </p>
          </div>
        </div>
      </section>

      {/* What the Evaluation Covers */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What My MDR Evaluation Covers</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Review of the student's complete IEP, including all services and accommodations",
              "Review of prior evaluations, medical records, and behavioral documentation",
              "Clinical interview with the student",
              "Interviews with parents/guardians and key school personnel",
              "Psychiatric diagnostic assessment and differential diagnosis",
              "Analysis of the direct relationship between the disability and the behavior in question",
              "Review of IEP implementation fidelity",
              "Written report with clinical conclusions and recommendations for the MDR team",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-3 rounded-lg border border-border bg-background">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Facing a Manifestation Determination Review?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact me immediately to discuss your timeline and arrange an expedited independent psychiatric evaluation.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Contact Dr. Kale Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
