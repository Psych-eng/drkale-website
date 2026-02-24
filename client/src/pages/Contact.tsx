import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, CreditCard } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);
    formDataToSend.append("access_key", "4fadda93-5270-4094-b962-384f682b01e4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your message. We'll be in touch soon!");
        setFormData({ name: "", email: "", phone: "", organization: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/30 to-background py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Schedule an Evaluation Consultation
            </h1>
            <p className="text-lg text-muted-foreground">
              Contact me to discuss your evaluation needs and determine the best approach for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Left column: Contact info + hours + map */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Contact Information</h2>

              {/* Phone */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <a href="tel:+18605615453" className="text-muted-foreground hover:text-primary transition-colors">
                        860-561-5453
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">Fax: 860-371-2527</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a href="mailto:email@drkale.net" className="text-muted-foreground hover:text-primary transition-colors">
                        email@drkale.net
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        119C Griswold Street, Suite 104
                        <br />
                        Glastonbury, CT 06033
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="w-full">
                      <h3 className="font-bold mb-3">Office Hours</h3>
                      <table className="w-full text-sm">
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border/40">
                            <td className="py-1.5 font-medium text-foreground">Monday</td>
                            <td className="py-1.5 text-right">Evenings (Private Practice)</td>
                          </tr>
                          <tr className="border-b border-border/40">
                            <td className="py-1.5 font-medium text-foreground">Tuesday – Thursday</td>
                            <td className="py-1.5 text-right">By Appointment</td>
                          </tr>
                          <tr className="border-b border-border/40">
                            <td className="py-1.5 font-medium text-foreground">Friday</td>
                            <td className="py-1.5 text-right">School Hours (Evaluations)</td>
                          </tr>
                          <tr>
                            <td className="py-1.5 font-medium text-foreground">Saturday – Sunday</td>
                            <td className="py-1.5 text-right">Closed</td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="text-xs text-muted-foreground mt-3">
                        School evaluations are primarily conducted on Mondays and Fridays. Please call or email to inquire about new patient availability.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment */}
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CreditCard className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Payment Information</h3>
                      <p className="text-sm text-muted-foreground">
                        <strong>No insurance accepted.</strong> Private pay practice with payment due at time of service. Documentation provided for potential insurance reimbursement. School districts may contract directly for evaluations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <iframe
                  title="Office Location — 119C Griswold Street, Suite 104, Glastonbury, CT"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.0!2d-72.6087!3d41.7023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e65d9f2c5f1b3d%3A0x1f2e3c4d5a6b7c8d!2s119C%20Griswold%20St%20Suite%20104%2C%20Glastonbury%2C%20CT%2006033!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right column: Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(860) 555-1234"
                  />
                </div>

                <div>
                  <Label htmlFor="organization">School District / Organization</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g., Glastonbury Public Schools"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Please describe your evaluation needs..."
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">* Required fields</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
