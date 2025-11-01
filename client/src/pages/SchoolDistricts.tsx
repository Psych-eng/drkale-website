import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Shield, AlertTriangle, Brain, Scale, DollarSign, Users } from "lucide-react";

export default function SchoolDistricts() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/30 to-background py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Strategic Partner in Student Well-Being and District Stability
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              As a Special Education Director or school leader, you are tasked with ensuring every student receives a Free Appropriate Public Education (FAPE) while managing legal risk, budgetary constraints, and complex student needs. I provide the deep clinical expertise you need to make confident, effective, and legally defensible decisions.
            </p>
          </div>
        </div>
      </section>

      {/* How I Help Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How I Help Districts Solve Their Most Complex Challenges
          </h2>

          <div className="space-y-12 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Mitigate Legal Risk & Prevent Due Process</h3>
                    <p className="text-muted-foreground mb-3">
                      A comprehensive, independent psychiatric evaluation is your best defense against costly due process hearings. My evaluations provide a legally defensible clinical foundation for your IEPs, ensuring they are robust, appropriate, and built on expert opinion.
                    </p>
                    <p className="text-foreground/80">
                      I help you make decisions that are not only in the best interest of the student, but also protect your district from legal challenges.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Ensure Student Safety with Expert Threat & Risk Assessments</h3>
                    <p className="text-muted-foreground mb-3">
                      In today's climate, student safety is paramount. When a student's behavior raises concerns, you need to know if they pose a true threat. As a psychiatrist, I provide the critical clinical expertise your threat assessment team needs to distinguish between a student who <em>makes</em> a threat and one who <em>poses</em> a threat.
                    </p>
                    <p className="text-foreground/80 mb-3">
                      My evaluations are a life-saving tool for violence prevention and suicide risk assessment. Research shows that 56% of school threat assessments involve suicide risk—the second leading cause of death for youth.
                    </p>
                    <Link href="/threat-assessment">
                      <Button variant="outline">Learn More About Threat Assessments</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Brain className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Bring Clarity to Your Most Complex Cases</h3>
                    <p className="text-muted-foreground mb-3">
                      When your internal team is faced with a student with overlapping diagnoses, severe behaviors, or a history of trauma, I provide the specialized psychiatric insight needed to bring clarity.
                    </p>
                    <p className="text-foreground/80">
                      I can help differentiate complex conditions like bipolar disorder, ADHD, and trauma-related disorders, ensuring an accurate diagnosis that leads to effective intervention.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Users className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">De-escalate Conflict and Build Consensus</h3>
                    <p className="text-muted-foreground mb-3">
                      When parents disagree with a school's evaluation, an independent assessment can be the key to moving forward. My objective, data-driven evaluations provide a credible second opinion that can help build consensus, restore trust, and create a collaborative path forward that serves the student's best interests.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <DollarSign className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Allocate Resources Effectively</h3>
                    <p className="text-muted-foreground mb-3">
                      An investment in a thorough upfront evaluation is more cost-effective than years of inappropriate services or a costly out-of-district placement.
                    </p>
                    <p className="text-foreground/80">
                      My detailed recommendations help you target resources where they are most needed, ensuring that every dollar is spent effectively to achieve the best possible student outcomes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Scale className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Established Relationships with Connecticut Districts</h3>
                    <p className="text-muted-foreground mb-3">
                      Over 20 years of experience as trusted consultant for Glastonbury and Capitol Region Education Council (CREC) school districts. I have deep understanding of Connecticut's educational landscape and the challenges schools face in serving students with complex needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Threat Assessment Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Expert Psychiatric Risk Assessments for School Safety
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Ensuring a safe learning environment is one of a school district's most critical responsibilities. When a student's behavior raises concerns about potential harm to themselves or others, a comprehensive psychiatric risk assessment is an essential step.
            </p>
            <p className="text-foreground/80 mb-6">
              As a board-certified psychiatrist, I have specialized expertise in conducting threat and risk assessments for schools. My evaluations go beyond behavioral checklists to provide a deep clinical understanding of the student's state of mind, risk factors, and potential for violence.
            </p>

            <div className="bg-background rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">My Risk Assessments Provide:</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>A Clear Assessment of Threat Level:</strong> Distinguishing between transient threats and credible danger.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Identification of Underlying Mental Health Conditions:</strong> Uncovering the root causes of threatening behavior.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Suicide Risk Assessment:</strong> A critical component, as 56% of school threat assessments involve suicide risk.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Actionable Safety Planning:</strong> Specific, practical recommendations for managing risk and ensuring the safety of the student and the school community.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Legally Defensible Documentation:</strong> A comprehensive report that documents the district's proactive approach to safety.</span>
                </li>
              </ul>
            </div>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
              <p className="text-foreground font-medium">
                <strong>Don't wait for a crisis.</strong> If you have a student of concern, a psychiatric risk assessment is a critical investment in the safety and well-being of your entire school community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Request a Consultation for Your District
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact me today to discuss your district's evaluation needs and scheduling requirements.
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
