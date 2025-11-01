import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Dr. Milind Kale, MD</h3>
            <p className="text-sm text-muted-foreground">
              Board-Certified Child, Adolescent, and Adult Psychiatrist
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Over 20 years of experience providing expert psychiatric evaluations for Connecticut school districts.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 text-primary" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">860-561-5453</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 text-primary" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">email@drkale.net</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary" />
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-sm text-muted-foreground">
                    119C Griswold Street, Suite 104<br />
                    Glastonbury, CT 06033
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Availability</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="font-medium text-foreground">School Evaluations:</span> Mondays & Fridays during school hours</p>
              <p><span className="font-medium text-foreground">Private Practice:</span> Monday evenings</p>
              <p className="mt-4 text-xs">No insurance accepted. Private pay practice with payment due at time of service.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dr. Milind Kale, MD LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
