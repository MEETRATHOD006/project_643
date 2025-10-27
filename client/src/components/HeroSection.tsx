import { Button } from "@/components/ui/button";
import heroImage from '@assets/generated_images/Luxury_salon_hero_image_44ab3e74.png';

interface HeroSectionProps {
  onBookClick: () => void;
}

export function HeroSection({ onBookClick }: HeroSectionProps) {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in">
          Where Style Meets Confidence
        </h1>
        <p className="font-serif text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl animate-fade-in">
          JBN Unisex Salon and Academy
        </p>
        <Button 
          size="lg"
          onClick={onBookClick}
          data-testid="button-book-your-look"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-lg rounded-md shadow-xl animate-fade-in"
        >
          Book Your Look
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
