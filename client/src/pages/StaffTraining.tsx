import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Users, Brain, BookOpen, Award, CheckCircle, Calendar } from "lucide-react";

const WORKSHOPS = [
  {
    title: "Recognizing Psychiatric Symptoms in the Classroom",
    audience: "Teachers, Para-educators, School Counselors",
    duration: "2–3 hours",
    desc: "Equips school staff to recognize early signs of depression, anxiety, ADHD, bipolar disorder, psychosis, and trauma in students — and understand how these conditions manifest differently in the classroom than in a clinical setting. Includes practical strategies for early referral and communication with parents.",
  },
  {
    title: "Understanding IEP Psychiatric Evaluations",
    audience: "Special Education Directors, IEP Team Members",
    duration: "2 hours",
    desc: "Helps IEP teams understand how to read and apply psychiatric evaluation reports, understand DSM-5 diagnoses in an educational context, and translate clinical recommendations into effective IEP goals and services. Reduces the gap between clinical findings and classroom implementation.",
  },
  {
    title: "Threat Assessment: A Psychiatric Framework",
    audience: "Threat Assessment Teams, Administrators, School Psychologists",
    duration: "3 hours",
    desc: "A practical training on the psychiatric principles underlying student threat assessment — including how to distinguish transient from substantive threats, recognize warning signs of escalation, integrate psychiatric consultation into the assessment process, and document decisions appropriately.",
  },
  {
    title: "Suicide Prevention and Crisis Response",
    audience: "All School Staff",
    duration: "2–3 hours",
    desc: "Evidence-based training on recognizing suicidal ideation in students, conducting an appropriate initial response, making safe referrals, communicating with parents, and supporting the school community after a crisis. Aligned with best practices from AFSP and SAMHSA.",
  },
  {
    title: "Psychotropic Medications in the School Setting",
    audience: "School Nurses, Special Education Staff, Administrators",
    duration: "2 hours",
    desc: "Demystifies commonly prescribed psychiatric medications — stimulants, antidepressants, mood stabilizers, antipsychotics — covering what they treat, common side effects to monitor, and how medication changes can affect a student's behavior and academic performance.",
  },
  {
    title: "Autism Spectrum Disorder: Beyond the Basics",
    audience: "Special Education Teachers, IEP Teams",
    duration: "3 hours",
    desc: "An advanced training for staff who already have basic ASD familiarity, covering the psychiatric complexity of ASD — including co-occurring ADHD, anxiety, depression, and psychosis — and how these conditions require differentiated approaches within the IEP and classroom.",
  },
];

export default function StaffTraining() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/30 to-background py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Development &amp; Staff Training
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expert-led psychiatric training workshops for school staff, IEP teams, administrators, and threat assessment teams — bringing clinical knowledge directly to your district.
            </p>
            <Link href="/contact">
              <Button size="lg">Inquire About Scheduling</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why This Training */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Bridging the Gap Between Clinical Knowledge and Educational Practice
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            School staff work daily with students who have significant psychiatric conditions — but most professional development on mental health is delivered by educators, not clinicians. Dr. Kale's trainings bring genuine board-certified psychiatric expertise into your school, in plain language your staff can act on immediately.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Brain className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Clinically Accurate</h3>
                <p className="text-muted-foreground text-sm">Training delivered by a board-certified psychiatrist — not a consultant summarizing others' research.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Practically Focused</h3>
                <p className="text-muted-foreground text-sm">Every workshop translates clinical concepts into specific, actionable steps for classroom and IEP settings.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Connecticut-Relevant</h3>
                <p className="text-muted-foreground text-sm">Grounded in Connecticut's specific special education regulations, procedures, and the realities of CT school districts.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshop Catalog */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Workshop Catalog</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {WORKSHOPS.map((w) => (
              <Card key={w.title} className="flex flex-col">
                <CardContent className="pt-6 flex flex-col flex-1">
                  <h3 className="font-bold text-lg mb-2">{w.title}</h3>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">{w.duration}</span>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">{w.audience}</span>
                  </div>
                  <p className="text-muted-foreground text-sm flex-1">{w.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-sm">
            Custom workshops on specific topics not listed above are available upon request. Contact Dr. Kale to discuss your district's particular needs.
          </p>
        </div>
      </section>

      {/* Format and Logistics */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Format &amp; Logistics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Calendar className="h-6 w-6 text-primary" />,
                title: "Flexible Scheduling",
                desc: "Workshops can be scheduled during professional development days, early release afternoons, or evening staff meetings. Both in-person at your school and remote video sessions are available.",
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Group and Department Sizes",
                desc: "Workshops are suitable for small department groups (5–15 staff) or full-faculty professional development days. Content is adapted based on the audience's background and role.",
              },
              {
                icon: <BookOpen className="h-6 w-6 text-primary" />,
                title: "Supporting Materials",
                desc: "Each workshop includes a printed or digital reference guide that staff can keep and use after the training — including symptom checklists, referral guides, and resource lists.",
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-primary" />,
                title: "CEU Documentation",
                desc: "Certificates of participation are provided for all attendees and can be used to document professional development hours for Connecticut educator recertification requirements.",
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

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bring Expert Psychiatric Training to Your Staff
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact Dr. Kale to discuss your district's training needs, preferred topics, and scheduling.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Inquire About Training
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
