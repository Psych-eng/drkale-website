import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { AlertTriangle, Shield, Brain, FileText, Clock, Users, CheckCircle, Info } from "lucide-react";

export default function ThreatAssessment() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-red-50 to-background py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Independent Psychiatric Evaluation for Your Threat Assessment Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              When your multidisciplinary threat assessment team identifies a student of serious concern, an independent psychiatric evaluation provides the clinical depth needed to inform your team's decisions — while your team retains full ownership of the threat assessment process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Request a Consultation</Button>
              </Link>
              <Link href="/school-districts">
                <Button size="lg" variant="outline">All District Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Important Clarification Box */}
      <section className="py-10 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex items-start gap-4">
            <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-blue-900 mb-2">An Important Distinction</h2>
              <p className="text-blue-800 text-sm leading-relaxed">
                A psychiatric evaluation is not a threat assessment and does not replace your district's formal threat assessment process. Connecticut school districts are required to conduct threat assessments through their own multidisciplinary threat assessment teams — typically using an evidence-based model such as the Comprehensive School Threat Assessment Guidelines (CSTAG). What I provide is an independent clinical psychiatric evaluation of the student that your team can use as one critical input within that process. Your team retains full responsibility for the threat assessment determination and safety planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Fits Into the Process */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Where Psychiatric Evaluation Fits in the CSTAG Process
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Most Connecticut districts use the CSTAG model or a similar structured framework. Here is how an independent psychiatric evaluation supports that process.
          </p>

          <div className="space-y-4">
            {[
              {
                step: "Steps 1–3",
                label: "Your team handles independently",
                desc: "Your multidisciplinary team evaluates the threat, determines whether it is transient or substantive, and responds with immediate protective action. These steps are conducted by your internal team and do not require outside psychiatric involvement in most cases.",
                highlight: false,
              },
              {
                step: "Step 4",
                label: "Where I can help",
                desc: "For the most serious substantive threats, the CSTAG model calls for a comprehensive safety evaluation that includes a mental health assessment of the student. This is where an independent psychiatric evaluation adds its greatest value — providing your team with a clinical picture of the student's mental state, psychiatric diagnosis, suicide risk, and mental health recommendations that your team then incorporates into its safety planning.",
                highlight: true,
              },
              {
                step: "Safety Planning",
                label: "Your team decides",
                desc: "Your threat assessment team — not the psychiatrist — owns the final safety plan. My written report provides clinical recommendations for your team to consider, but the determination of threat level and the specific safety measures are the responsibility of your multidisciplinary team and administration.",
                highlight: false,
              },
            ].map((item) => (
              <Card key={item.step} className={item.highlight ? "border-primary/40 bg-primary/5" : ""}>
                <CardContent className="pt-5 pb-5">
                  <div className="flex items-start gap-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold flex-shrink-0 mt-0.5 ${item.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      {item.step}
                    </div>
                    <div>
                      <p className={`font-bold mb-1 ${item.highlight ? "text-primary" : "text-foreground"}`}>{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why a Psychiatrist Adds Value */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            What a Psychiatric Evaluation Adds That Your Internal Team Cannot
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            School counselors, psychologists, and social workers are valuable members of your threat assessment team. A board-certified child and adolescent psychiatrist provides a distinct clinical layer that those roles are not trained or licensed to provide.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Brain className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Psychiatric Diagnosis</h3>
                <p className="text-muted-foreground text-sm">
                  Only a licensed physician can diagnose and evaluate the full range of psychiatric conditions — including psychosis, severe mood disorders, and trauma — that may underlie threatening behavior and require medical-level clinical judgment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Suicide Risk Assessment</h3>
                <p className="text-muted-foreground text-sm">
                  A structured psychiatric suicide risk assessment goes significantly beyond a standard school mental health screening — evaluating ideation, intent, plan, means access, protective factors, and clinical risk level with medical-grade rigor.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <FileText className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Legally Defensible Report</h3>
                <p className="text-muted-foreground text-sm">
                  A written evaluation from a triple-board-certified psychiatrist documents your team's clinical due diligence at the highest level, strengthening your district's position in any subsequent legal proceedings or regulatory review.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12 bg-red-50 border-y border-red-100">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-red-600">56%</p>
              <p className="text-muted-foreground mt-2 text-sm">of school threat assessments involve suicide risk — the second leading cause of death for youth ages 10–24.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">Step 4</p>
              <p className="text-muted-foreground mt-2 text-sm">of the CSTAG model calls for an independent mental health evaluation for the most serious, substantive threats.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">3,000+</p>
              <p className="text-muted-foreground mt-2 text-sm">schools across 41 states use CSTAG — the only school threat assessment model listed in the federal NREPP.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What My Evaluation Provides */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">What My Psychiatric Evaluation Provides to Your Team</h2>
          <div className="space-y-4">
            {[
              {
                title: "Comprehensive Psychiatric Interview",
                desc: "A structured clinical interview with the student, with parental consent, to assess mental state, psychiatric history, emotional functioning, and the psychological context surrounding the concerning behavior.",
              },
              {
                title: "Psychiatric Diagnosis and Differential Diagnosis",
                desc: "Clinical determination of any underlying psychiatric conditions — including psychosis, severe mood disorders, ADHD, autism spectrum disorder, trauma-related conditions, and substance use — that may be contributing to the behavior and require treatment.",
              },
              {
                title: "Structured Suicide Risk Assessment",
                desc: "A medical-level evaluation of suicidal ideation, intent, plan, access to means, and protective factors — providing your team with the clinical detail needed to determine appropriate safety measures and referrals.",
              },
              {
                title: "Clinical Recommendations for Your Team",
                desc: "Specific recommendations regarding treatment referrals, medication evaluation, outpatient versus inpatient level of care, school-based mental health supports, and conditions that would be clinically appropriate to consider as part of return-to-school planning.",
              },
              {
                title: "Written Report for Your Team's Records",
                desc: "A comprehensive written psychiatric evaluation documenting all clinical findings and recommendations — clearly framed as input for your threat assessment team's use, not as a threat assessment determination itself.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-5 pb-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timing */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <Clock className="h-12 w-12 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Responsive Turnaround for Time-Sensitive Situations</h2>
              <p className="text-muted-foreground mb-4">
                Threat-related situations rarely allow for lengthy delays. I understand the urgency and work to accommodate expedited evaluations when a district's threat assessment team is actively managing a situation and needs clinical input quickly. Initial phone consultation is typically available within 24 hours of contact.
              </p>
              <p className="text-foreground/80">
                For proactive evaluations — where a district wants a psychiatric assessment of a student of ongoing concern before a situation escalates — standard scheduling applies, with written reports typically completed within two to three weeks of the final interview session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Request This */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">When to Request an Independent Psychiatric Evaluation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Your threat assessment team has classified a threat as a serious substantive threat and is at Step 4 of the CSTAG process, requiring a mental health evaluation",
              "A student has expressed suicidal ideation alongside threatening behavior and your team needs a structured clinical suicide risk assessment",
              "Your team suspects an underlying psychiatric condition — such as psychosis or a severe mood disorder — that requires medical-level evaluation beyond what a school psychologist can provide",
              "A student is being considered for return to school following a psychiatric hospitalization and your team needs clinical input to inform safe return-to-school conditions",
              "Your district wants an independent psychiatric evaluation of a student of ongoing concern before a situation escalates to a formal threat incident",
              "Your team's safety plan requires documentation of clinical due diligence at the psychiatrist level for legal or regulatory purposes",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-lg border border-border bg-muted/20">
                <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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
            Need Clinical Input for Your Threat Assessment Team?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact me to discuss your situation confidentially and determine whether an independent psychiatric evaluation is the right step for your team's process.
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
