import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Palette, Users, GraduationCap } from "lucide-react";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
}

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium services tailored to enhance your natural beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card 
              key={service.id}
              data-testid={`card-service-${idx}`}
              className="group overflow-visible hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105 border-card-border"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="p-8">
                {service.image && (
                  <div className="mb-6 overflow-hidden rounded-md">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-center mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export const defaultServices: Service[] = [
  {
    id: '1',
    icon: <Scissors className="h-8 w-8" />,
    title: 'Hair Styling',
    description: 'Expert cuts, colors, and treatments for all hair types'
  },
  {
    id: '2',
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Beauty Services',
    description: 'Facials, skin care, and rejuvenation treatments'
  },
  {
    id: '3',
    icon: <Palette className="h-8 w-8" />,
    title: 'Makeup Artistry',
    description: 'Bridal, party, and professional makeup services'
  },
  {
    id: '4',
    icon: <Users className="h-8 w-8" />,
    title: 'Men\'s Grooming',
    description: 'Premium barbering and grooming for the modern gentleman'
  },
  {
    id: '5',
    icon: <GraduationCap className="h-8 w-8" />,
    title: 'Academy Courses',
    description: 'Professional certification programs in beauty and styling'
  }
];
