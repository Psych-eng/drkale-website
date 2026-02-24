import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Gavel, FileText, Shield, Award, CheckCircle, BookOpen } from "lucide-react";

export default function ExpertWitness() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/30 to-background py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Gavel className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Expert Witness &amp; Due Process Support
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Board-certified psychiatric expertise for special education due process hearings, mediations, and legal proceedings in Connecticut.
            </p>
            <Link href="/contact">
              <Button size="lg">Discuss Your Case</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who Can Engage */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Available to Both Districts and Families</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-primary">For School Districts</h3>
                <p className="text-muted-foreground mb-4">
                  When a district faces a due process complaint or a state complaint investigation, having a board-certified psychiatrist available to review the evaluation record, provide an independent clinical opinion, and testify on the appropriateness of the district's decisions is a significant legal advantage.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />Review and opinion on existing evaluations</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />Independent evaluation to supplement district records</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />Expert testimony on clinical and diagnostic standards</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />Consultation with district legal counsel</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-primary">For Families</h3>
                <p className="text-muted-foreground mb-4">
                  When parents believe a district has failed to appropriately evaluate or serve their child, an independent psychiatric evaluation and expert witness can be pivotal in a due process hearing — providing the clinical evidence needed to demonstrate the child's needs and the district's shortcomings.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />Independent Educational Evaluation (IEE) for due process</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />Expert review of district evaluation methodology</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />Written report documenting clinical findings</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />Testimony at hearing or mediation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Dr. Kale's Testimony Carries Weight</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "Triple Board Certification",
                desc: "Board-certified in Child and Adolescent Psychiatry, General Psychiatry, and Psychosomatic Medicine — among the most credentialed expert witnesses available for special education proceedings.",
              },
              {
                icon: <BookOpen className="h-8 w-8 text-primary" />,
                title: "Yale Faculty Background",
                desc: "Former Assistant Clinical Professor of Psychiatry at Yale University, providing academic grounding and credibility that carries significant weight in legal proceedings.",
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "20+ Years of Connecticut School Experience",
                desc: "Decades of direct experience as a psychiatric consultant for Connecticut school districts gives Dr. Kale intimate knowledge of how evaluations should be conducted and what appropriate services look like.",
              },
              {
                icon: <FileText className="h-8 w-8 text-primary" />,
                title: "ADOS Certified",
                desc: "Certified in the Autism Diagnostic Observation Schedule — critical for cases involving autism spectrum disorder, one of the most commonly litigated areas of special education.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-6">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Expert Witness Services</h2>
          <div className="space-y-4">
            {[
              {
                title: "Independent Educational Evaluation (IEE)",
                desc: "A comprehensive, independent psychiatric evaluation conducted at public expense (when requested by parents under IDEA) or privately, specifically designed to provide an objective clinical assessment for use in IEP development or due process proceedings.",
              },
              {
                title: "Record Review and Written Opinion",
                desc: "Review of an existing evaluation record and written clinical opinion on its adequacy, methodology, and conclusions — without conducting a new evaluation. Useful for both pre-hearing preparation and mediation.",
              },
              {
                title: "Expert Testimony",
                desc: "Testimony at due process hearings before a Connecticut special education hearing officer, state complaint investigations, or mediation sessions. Available for both in-person and remote proceedings.",
              },
              {
                title: "Consultation with Legal Counsel",
                desc: "Pre-hearing consultation with district or family attorneys to review the clinical record, identify strengths and weaknesses, and develop a clinical strategy for the proceeding.",
              },
              {
                title: "Rebuttal Evaluation",
                desc: "Independent evaluation specifically designed to review and respond to an evaluation submitted by the opposing party in a due process proceeding.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-5 pb-5">
                  <div className="flex items-start gap-4">
                    <Gavel className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Facing a Due Process Hearing?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact me to discuss your case confidentially and determine how an independent psychiatric expert can support your position.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Contact Dr. Kale
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
