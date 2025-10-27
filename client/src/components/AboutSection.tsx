interface AboutSectionProps {
  image: string;
  title: string;
  description: string[];
}

export function AboutSection({ image, title, description }: AboutSectionProps) {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-4">
              <div className="h-1 w-16 bg-primary rounded-full" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              {title}
            </h2>
            <div className="space-y-4">
              {description.map((para, idx) => (
                <p key={idx} className="text-muted-foreground text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg -z-10" />
              <img
                src={image}
                alt={title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
