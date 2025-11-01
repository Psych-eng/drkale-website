import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { FileText, Scale, Users, CheckCircle } from "lucide-react";

export default function Parents() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/30 to-background py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering Your Child with a Clear Path Forward
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              An independent psychiatric evaluation can be a powerful tool for parents. It provides a comprehensive, objective look at your child's unique strengths and challenges, free from the constraints of the school system. This clarity empowers you to advocate effectively for the services and supports your child needs to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* When to Consider Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            When to Consider an Independent Evaluation
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-bold mb-2">School evaluation results seem incomplete</h3>
                <p className="text-muted-foreground">
                  If you feel the school's evaluation didn't capture the full picture of your child's needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-bold mb-2">You disagree with the school's findings</h3>
                <p className="text-muted-foreground">
                  When you believe the school's assessment doesn't accurately reflect your child's challenges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-bold mb-2">Your child needs more comprehensive assessment</h3>
                <p className="text-muted-foreground">
                  For complex cases requiring specialized psychiatric expertise beyond what schools can provide.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-bold mb-2">IEP team needs additional diagnostic clarity</h3>
                <p className="text-muted-foreground">
                  When the team is uncertain about diagnoses or appropriate interventions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-bold mb-2">Complex or multiple diagnoses are suspected</h3>
                <p className="text-muted-foreground">
                  For students with overlapping conditions that require expert differentiation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-bold mb-2">You need a second opinion</h3>
                <p className="text-muted-foreground">
                  To confirm or challenge existing diagnoses and treatment recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Your Rights as a Parent
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <Scale className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-xl font-bold mb-2">Request Independent Evaluation</h3>
                  <p className="text-muted-foreground">
                    You have the right to request an independent evaluation at district expense if you disagree with the school's evaluation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <FileText className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-xl font-bold mb-2">Obtain Private Evaluation</h3>
                  <p className="text-muted-foreground">
                    You can obtain a private evaluation at your own expense at any time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Users className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-xl font-bold mb-2">IEP Team Consideration</h3>
                  <p className="text-muted-foreground">
                    The IEP team must consider your independent evaluation results in their decision-making.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Scale className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-xl font-bold mb-2">Due Process Rights</h3>
                  <p className="text-muted-foreground">
                    You can bring your evaluation to a due process hearing as evidence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              What to Expect
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Comprehensive Clinical Interview</h3>
                      <p className="text-muted-foreground">
                        In-depth discussion with you and your child about developmental history, current challenges, and family context.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Review of All School Records</h3>
                      <p className="text-muted-foreground">
                        Thorough examination of IEPs, 504 Plans, previous evaluations, academic records, and teacher reports.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Standardized Assessment Tools</h3>
                      <p className="text-muted-foreground">
                        Evidence-based rating scales (BASC-3, Conners-3, others as appropriate) completed by parents and teachers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Detailed Written Report</h3>
                      <p className="text-muted-foreground">
                        Comprehensive report with diagnostic impressions, educational impact analysis, and specific recommendations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Specific Educational Recommendations</h3>
                      <p className="text-muted-foreground">
                        Actionable recommendations for accommodations, modifications, and interventions that the school team can implement.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Advocate for Your Child?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact me today to schedule a consultation and learn how an independent evaluation can help your child get the support they need.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
