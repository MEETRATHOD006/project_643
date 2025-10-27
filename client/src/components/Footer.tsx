export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              JBN<span className="text-primary">.</span>
            </h3>
            <p className="text-background/70 text-sm">
              Where Style Meets Confidence
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p className="hover:text-background cursor-pointer">Services</p>
              <p className="hover:text-background cursor-pointer">Gallery</p>
              <p className="hover:text-background cursor-pointer">Academy</p>
              <p className="hover:text-background cursor-pointer">Contact</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p>123 Beauty Street</p>
              <p>+1 (555) 123-4567</p>
              <p>info@jbnsalon.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} JBN Unisex Salon and Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
