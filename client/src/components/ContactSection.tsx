import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram, Youtube } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: { day: string; time: string }[];
  socials: {
    instagram?: string;
    youtube?: string;
    whatsapp?: string;
  };
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
  mapEmbedUrl?: string;
}

export function ContactSection({ contactInfo, mapEmbedUrl }: ContactSectionProps) {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visit Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Find us or get in touch
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="h-96 lg:h-full rounded-lg overflow-hidden shadow-lg bg-muted">
              {mapEmbedUrl ? (
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JBN Salon Location"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <MapPin className="h-16 w-16" />
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-muted-foreground text-sm hover:text-primary">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground text-sm hover:text-primary">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <h3 className="font-semibold">Opening Hours</h3>
                </div>
                <div className="space-y-2">
                  {contactInfo.hours.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="font-medium">{item.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {contactInfo.socials.instagram && (
                    <Button
                      size="icon"
                      variant="outline"
                      data-testid="button-instagram"
                      onClick={() => window.open(contactInfo.socials.instagram, '_blank')}
                      className="hover-elevate"
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                  )}
                  {contactInfo.socials.youtube && (
                    <Button
                      size="icon"
                      variant="outline"
                      data-testid="button-youtube"
                      onClick={() => window.open(contactInfo.socials.youtube, '_blank')}
                      className="hover-elevate"
                    >
                      <Youtube className="h-5 w-5" />
                    </Button>
                  )}
                  {contactInfo.socials.whatsapp && (
                    <Button
                      size="icon"
                      variant="outline"
                      data-testid="button-whatsapp-contact"
                      onClick={() => window.open(contactInfo.socials.whatsapp, '_blank')}
                      className="hover-elevate"
                    >
                      <SiWhatsapp className="h-5 w-5" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
