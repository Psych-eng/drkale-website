import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Lock, FileCheck, Upload, Download, CheckCircle2, BookOpen } from "lucide-react";
import { useState } from "react";
import { schoolPortalConfig } from "@/config/schoolPortal";

export default function SchoolPortal() {
  const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState("");
  const [isValidating, setIsValidating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsValidating(true);

    // Normalize the access code (uppercase, trim whitespace)
    const normalizedCode = accessCode.trim().toUpperCase();

    // Primary path: ask the Worker to validate the code AND log the attempt
    // in a single request. This is what makes logging reliable — the
    // Worker, not the browser, decides whether the code is valid, so the
    // log entry is written as part of producing the redirect link itself,
    // not as a separate fire-and-forget call that can silently fail.
    try {
      const response = await fetch('/api/portal-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessCode: normalizedCode }),
      });

      if (!response.ok) {
        throw new Error(`Worker responded with status ${response.status}`);
      }

      const data = (await response.json()) as { success: boolean; redirectUrl: string | null };

      if (data.success && data.redirectUrl) {
        window.location.href = data.redirectUrl;
        return;
      }

      setError("Invalid access code. Please check your code and try again.");
      setIsValidating(false);
      return;
    } catch (workerError) {
      // Safety net: if the request to the Worker couldn't complete at all
      // (network issue, a school network filter or ad blocker interfering
      // with the request, etc.), fall back to the local code lookup so a
      // legitimate district is never locked out of their documents. This
      // fallback path is not guaranteed to be logged, but that's a much
      // smaller problem than blocking access outright.
      console.error('Portal access request failed, using local fallback:', workerError);
    }

    const sharePointLink = schoolPortalConfig[normalizedCode];

    if (sharePointLink) {
      // Best-effort logging attempt for the fallback path; ignore failures.
      const districtName = normalizedCode.split('-')[0];
      const districtNameFormatted = districtName.charAt(0) + districtName.slice(1).toLowerCase();

      fetch('/api/log-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accessCode: normalizedCode,
          districtName: districtNameFormatted,
          success: true,
          sharePointUrl: sharePointLink,
        }),
      }).catch(() => {
        // Already in the fallback path; nothing more we can do here.
      });

      window.location.href = sharePointLink;
    } else {
      setError("Invalid access code. Please check your code and try again.");
      setIsValidating(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Secure School District Portal
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              HIPAA-compliant document exchange for school districts
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" />
              <span>Password-protected • Encrypted • Secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Access Code Entry Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Access Your District Portal</CardTitle>
                <CardDescription>
                  Enter the unique access code provided by Dr. Kale to access your district's secure document exchange portal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="accessCode">Access Code</Label>
                    <Input
                      id="accessCode"
                      type="text"
                      placeholder="Enter your access code"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      required
                      className="font-mono uppercase"
                      autoComplete="off"
                    />
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full" disabled={isValidating}>
                    {isValidating ? "Validating..." : "Access Portal"}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t space-y-3">
                  <a 
                    href="/portal-guide" 
                    className="flex items-center justify-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <BookOpen className="h-4 w-4" />
                    View Portal Guide & Instructions
                  </a>
                  <p className="text-sm text-muted-foreground text-center">
                    Don't have an access code?{" "}
                    <a href="/contact" className="text-primary hover:underline">
                      Contact Dr. Kale
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Secure Document Exchange Features
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Upload className="h-10 w-10 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Upload Documents</h3>
                      <p className="text-muted-foreground">
                        Securely upload student records, referral forms, and supporting documentation directly to your district's private folder.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Download className="h-10 w-10 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Download Evaluations</h3>
                      <p className="text-muted-foreground">
                        Access completed psychiatric evaluations and reports as soon as they're ready.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-10 w-10 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">HIPAA Compliant</h3>
                      <p className="text-muted-foreground">
                        All documents are protected with enterprise-grade encryption and HIPAA-compliant security measures.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Lock className="h-10 w-10 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Private & Isolated</h3>
                      <p className="text-muted-foreground">
                        Your district's folder is completely isolated. No other districts can access or even see your documents.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Receive Your Access Code</h3>
                  <p className="text-muted-foreground">
                    When you engage Dr. Kale for an evaluation, you'll receive a unique access code and password for your district's secure portal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Access Your Portal</h3>
                  <p className="text-muted-foreground">
                    Enter your access code above to be securely redirected to your district's private SharePoint folder.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Upload Documents</h3>
                  <p className="text-muted-foreground">
                    Upload student records, referral forms, consent forms, and any supporting documentation needed for the evaluation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Receive Completed Evaluations</h3>
                  <p className="text-muted-foreground">
                    Dr. Kale will place completed evaluation reports in your portal for secure download. You'll be notified when reports are ready.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Complete Privacy Guaranteed</h3>
                  <p className="text-muted-foreground">
                    Your district's portal is completely isolated from all other districts. No other school can see your district name, documents, or even know that you're using this service. All access is logged and monitored for security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Help?
            </h2>
            <p className="text-muted-foreground mb-6">
              If you're having trouble accessing your portal or need to request access for your district, please contact Dr. Kale.
            </p>
            <a href="/contact">
              <Button size="lg">Contact Dr. Kale</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
