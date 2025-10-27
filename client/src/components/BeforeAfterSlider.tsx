import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Transformation {
  id: string;
  before: string;
  after: string;
  title: string;
}

interface BeforeAfterSliderProps {
  transformations: Transformation[];
}

export function BeforeAfterSlider({ transformations }: BeforeAfterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const current = transformations[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real Transformations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the magic unfold with our expert stylists and makeup artists
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div 
              className="relative rounded-lg overflow-hidden shadow-2xl select-none cursor-ew-resize"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
              onTouchMove={handleTouchMove}
            >
              <img 
                src={current.after} 
                alt="After" 
                className="w-full h-auto block"
                draggable={false}
              />
              
              <div 
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src={current.before} 
                  alt="Before" 
                  className="w-full h-full object-cover"
                  style={{ width: `${(100 / sliderPosition) * 100}%` }}
                  draggable={false}
                />
              </div>

              <div 
                className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <ChevronLeft className="h-4 w-4 text-primary-foreground -mr-2" />
                  <ChevronRight className="h-4 w-4 text-primary-foreground -ml-2" />
                </div>
              </div>
            </div>
            
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-md">
              <span className="text-sm font-medium">Before</span>
            </div>
            <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-md">
              <span className="text-sm font-medium">After</span>
            </div>

            <Button
              size="icon"
              variant="outline"
              onClick={prev}
              data-testid="button-prev-transformation"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              onClick={next}
              data-testid="button-next-transformation"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="text-center mt-6">
            <h3 className="font-semibold text-xl text-foreground">{current.title}</h3>
            <div className="flex justify-center gap-2 mt-4">
              {transformations.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  data-testid={`button-transformation-${idx}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-primary w-8' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
