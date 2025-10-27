import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: string;
  name: string;
  service: string;
  photo: string;
  quote: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/30 via-background to-accent/20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client Love
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from our satisfied clients
          </p>
        </div>

        <Card className="relative overflow-visible border-none shadow-2xl">
          <CardContent className="p-12">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground p-4 rounded-full shadow-lg">
              <Quote className="h-8 w-8" />
            </div>

            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-6 ring-4 ring-primary/20">
                <AvatarImage src={testimonial.photo} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 italic max-w-2xl">
                "{testimonial.quote}"
              </p>

              <div>
                <p className="font-semibold text-lg text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground">{testimonial.service}</p>
              </div>
            </div>
          </CardContent>

          <div className="flex justify-center gap-4 pb-8">
            <Button
              size="icon"
              variant="outline"
              onClick={prev}
              data-testid="button-prev-testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  data-testid={`button-testimonial-${idx}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === current ? 'bg-primary w-8' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            <Button
              size="icon"
              variant="outline"
              onClick={next}
              data-testid="button-next-testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
