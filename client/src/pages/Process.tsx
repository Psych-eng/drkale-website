import { Card, CardContent } from "@/components/ui/card";
import { FileText, School, ClipboardCheck, FileCheck } from "lucide-react";

export default function Process() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/30 to-background py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Evaluation Process
            </h1>
            <p className="text-lg text-muted-foreground">
              A thorough, systematic approach designed to provide the most accurate and useful assessment for educational planning.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-bold">Document Review</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Thorough review of all relevant records including IEPs, 504 Plans, previous evaluations, academic records, and notes from school staff and outside providers.
                    </p>
                    <div className="bg-accent/50 rounded-lg p-4">
                      <p className="text-sm font-medium text-foreground">Timeline: 1-2 weeks</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <School className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-bold">On-Site School Evaluation</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Comprehensive evaluation conducted at the school, integrating real-time observations, student interviews, school staff input, and parent perspectives in the natural environment.
                    </p>
                    <div className="bg-accent/50 rounded-lg p-4">
                      <p className="text-sm font-medium text-foreground">Mondays & Fridays during school hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <ClipboardCheck className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-bold">Standardized Assessments</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Evidence-based rating scales (BASC-3, Conners-3, others as appropriate) completed by parents and teachers to provide objective data.
                    </p>
                    <div className="bg-accent/50 rounded-lg p-4">
                      <p className="text-sm font-medium text-foreground">Concurrent with interviews</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <FileCheck className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-bold">Comprehensive Report</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Detailed report with diagnostic impressions, educational impact analysis, and specific, actionable recommendations for the school team.
                    </p>
                    <div className="bg-accent/50 rounded-lg p-4">
                      <p className="text-sm font-medium text-foreground">Delivered within 2-3 weeks</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialized Evaluations */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Specialized Evaluation Types
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Risk Evaluations</h3>
                  <p className="text-muted-foreground">
                    Comprehensive assessment of safety concerns and risk factors in educational settings, including threat and suicide risk assessment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Autism Evaluations</h3>
                  <p className="text-muted-foreground">
                    ADOS-certified comprehensive autism spectrum assessments for educational planning.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Complex Diagnostic Assessments</h3>
                  <p className="text-muted-foreground">
                    Multi-faceted evaluations for students with complex or multiple diagnoses requiring specialized expertise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Different Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What Makes Our Evaluations Different
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">On-site evaluations in the natural school environment</h3>
                  <p className="text-sm text-muted-foreground">
                    Conducting assessments where students spend most of their time provides more accurate and relevant insights.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Deep understanding of Connecticut school systems</h3>
                  <p className="text-sm text-muted-foreground">
                    Over 20 years of experience with Connecticut districts ensures familiarity with local processes and challenges.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Focus on educational impact and practical solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Every recommendation is designed to be immediately implementable by school teams.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Comprehensive reports with actionable recommendations</h3>
                  <p className="text-sm text-muted-foreground">
                    Detailed documentation that provides clear guidance for IEP teams and educational planning.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Experience with complex cases and dual diagnoses</h3>
                  <p className="text-sm text-muted-foreground">
                    Specialized expertise in differentiating and managing overlapping psychiatric conditions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Collaborative approach with school teams</h3>
                  <p className="text-sm text-muted-foreground">
                    Working together with educators to ensure recommendations are understood and implemented effectively.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Designed for Clarity */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Process Designed for Clarity and Action
            </h2>
            <p className="text-lg opacity-90">
              Our comprehensive evaluation process is designed not just to produce a report, but to provide a solution. By integrating on-site observations, standardized assessments, and a thorough review of all records, we ensure that our findings are not only accurate but also highly relevant to the educational environment. The result is a set of specific, actionable recommendations that your IEP team can implement immediately to improve student outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
