import { Button } from "@/components/ui/button";
import DiagnosisLookup from "@/components/DiagnosisLookup";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Shield, Brain, FileCheck, Users, Award, Clock, Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/30 to-background py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Helping Connecticut Schools Solve Complex Student Cases and Manage Risk
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Through Expert Psychiatric Evaluations
            </p>
            <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">
              A Strategic Partner for Special Education Directors, IEP Teams, and School Leaders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/school-districts">
                <Button size="lg" className="w-full sm:w-auto">
                  For School Districts
                </Button>
              </Link>
              <Link href="/parents">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  For Parents
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              More Than Compliance—A Strategic Investment
            </h2>
            <p className="text-lg text-muted-foreground">
              While psychiatric assessments fulfill IDEA requirements, their true value extends far beyond regulatory compliance. I provide the deep clinical expertise you need to make confident, effective, and legally defensible decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Risk Management & Legal Protection</h3>
                <p className="text-muted-foreground">
                  Comprehensive evaluations provide a legally defensible clinical foundation for IEPs, reducing the risk of costly due process hearings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Brain className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Threat & Risk Assessments</h3>
                <p className="text-muted-foreground">
                  Life-saving clinical expertise for threat assessment teams to distinguish between students who make threats and those who pose threats.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <FileCheck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Clarity for Complex Cases</h3>
                <p className="text-muted-foreground">
                  Specialized psychiatric insight to differentiate complex conditions and ensure accurate diagnoses that lead to effective interventions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">De-escalate Conflict</h3>
                <p className="text-muted-foreground">
                  Independent, objective evaluations help build consensus between parents and districts, creating collaborative paths forward.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Effective Resource Allocation</h3>
                <p className="text-muted-foreground">
                  Thorough upfront evaluations are more cost-effective than years of inappropriate services or costly placements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Student Safety</h3>
                <p className="text-muted-foreground">
                  Critical suicide risk assessment and violence prevention expertise to ensure the safety of students and the school community.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 lg:col-span-3 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <Lock className="h-12 w-12 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">HIPAA-Compliant Secure Document Exchange</h3>
                    <p className="text-muted-foreground mb-4">
                      School districts can securely upload student records and download completed evaluations through our password-protected SharePoint portal. Each district receives a unique access code for their isolated, private folder—ensuring complete confidentiality and HIPAA compliance.
                    </p>
                    <Link href="/school-portal">
                      <Button variant="outline" size="sm">
                        Access School Portal
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diagnosis Lookup Tool */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <DiagnosisLookup />
        </div>
      </section>

      {/* About Dr. Kale */}      <section id="about" className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Dr. Milind Kale, MD
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Board-Certified Child, Adolescent, and Adult Psychiatrist
              </p>
              <p className="text-foreground/80 mb-4">
                With over 20 years of experience, I specialize in independent school psychiatric evaluations that bridge clinical expertise with educational insight. I serve as a strategic partner to Connecticut school districts, helping them solve their most complex and high-stakes student cases.
              </p>
              <p className="text-foreground/80 mb-4">
                My unique background includes serving as an Assistant Clinical Professor of Psychiatry at Yale University and as a trusted consultant for numerous Connecticut school districts, including Glastonbury and the Capitol Region Education Council (CREC).
              </p>
              <p className="text-foreground/80 mb-6">
                My evaluations are sought after by both school districts seeking objective assessments and families who need comprehensive evaluations to advocate for their children's educational needs.
              </p>
              <Link href="/credentials">
                <Button variant="outline">View Full Credentials</Button>
              </Link>
            </div>
            <div className="bg-accent/50 rounded-lg p-8 flex flex-col items-center">
              <img src="/dr-kale-photo.jpg" alt="Dr. Milind Kale" className="w-48 h-auto object-contain rounded-lg mb-6 border-4 border-primary/20" />
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Board Certifications</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Child & Adolescent Psychiatry</li>
                    <li>• General Psychiatry</li>
                    <li>• Psychosomatic Medicine</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Education</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• MD, Bombay University</li>
                    <li>• Master of Pharmacy Administration, Idaho State University</li>
                    <li>• Psychiatry Residency, UConn/Institute of Living</li>
                    <li>• Child Psychiatry Fellowship, UConn/Institute of Living</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Special Certifications</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• ADOS Certified (Autism Diagnostic Observation Schedule)</li>
                    <li>• Licensed Physician, Connecticut</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Discuss Your Evaluation Needs?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact me today to schedule a consultation and learn how I can help your district solve complex student cases with confidence.
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
