import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Building2, BookOpen } from "lucide-react";

export default function Credentials() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/30 to-background py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Credentials
            </h1>
            <p className="text-lg text-muted-foreground">
              Extensive training and experience in both clinical psychiatry and educational systems
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Board Certifications */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-10 w-10 text-primary" />
                  <h2 className="text-2xl font-bold">Board Certifications</h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground/80">Child & Adolescent Psychiatry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground/80">General Psychiatry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground/80">Psychosomatic Medicine</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Educational Background */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-10 w-10 text-primary" />
                  <h2 className="text-2xl font-bold">Educational Background</h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground/80">MD, Bombay University</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground/80">Master of Pharmacy Administration, Idaho State University</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground/80">Psychiatry Residency, UConn/Institute of Living</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground/80">Child Psychiatry Fellowship, UConn/Institute of Living</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* School District Experience */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-10 w-10 text-primary" />
                  <h2 className="text-2xl font-bold">School District Experience</h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground/80">Glastonbury Public Schools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground/80">Capitol Region Education Council (CREC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground/80">Multiple Connecticut districts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground/80">Independent evaluation specialist</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Academic Appointments */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-10 w-10 text-primary" />
                  <h2 className="text-2xl font-bold">Academic Appointments</h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground/80">Assistant Clinical Professor, Psychiatry, Yale University (2018-2022)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground/80">ADOS Certified (Autism Diagnostic Observation Schedule)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground/80">Licensed Physician, Connecticut</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <img src="/dr-kale-photo.jpg" alt="Dr. Milind Kale" className="w-64 h-auto object-contain rounded-lg border-4 border-primary/20 shadow-lg" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Over 20 Years of Experience
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 mb-4">
                Dr. Milind Kale brings over two decades of clinical experience in child and adolescent psychiatry, with specialized expertise in educational evaluations. His unique background combines rigorous medical training, academic teaching experience at Yale University, and extensive hands-on work with Connecticut school districts.
              </p>
              <p className="text-foreground/80 mb-4">
                Throughout his career, Dr. Kale has served as a trusted consultant to numerous school districts, including long-term partnerships with Glastonbury Public Schools and the Capitol Region Education Council (CREC). This experience has given him deep insight into the challenges schools face in serving students with complex mental health needs and the practical constraints of educational settings.
              </p>
              <p className="text-foreground/80 mb-4">
                His evaluations are recognized for their thoroughness, clinical accuracy, and practical applicability. School administrators value his ability to provide clear diagnostic clarity and actionable recommendations that can be immediately implemented by IEP teams. Parents appreciate his compassionate approach and his commitment to ensuring that every child receives the support they need to succeed.
              </p>
              <p className="text-foreground/80">
                Dr. Kale's triple board certification in Child & Adolescent Psychiatry, General Psychiatry, and Psychosomatic Medicine, combined with his ADOS certification for autism assessments, positions him as one of Connecticut's most qualified independent evaluators for complex educational cases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
