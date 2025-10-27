import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Phone } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

export function BookingSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', { name, phone, service, date });
    toast({
      title: "Booking Request Received!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setName("");
    setPhone("");
    setService("");
    setDate(undefined);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-background">
            Book Your Appointment
          </h2>
          <p className="text-background/80 text-lg">
            Transform your look with our expert team
          </p>
        </div>

        <div className="bg-background/5 backdrop-blur-sm p-8 rounded-lg border border-background/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-background">Your Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                data-testid="input-name"
                className="bg-background/10 border-background/30 text-background placeholder:text-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-background">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
                data-testid="input-phone"
                className="bg-background/10 border-background/30 text-background placeholder:text-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="text-background">Select Service</Label>
              <Select value={service} onValueChange={setService} required>
                <SelectTrigger 
                  data-testid="select-service"
                  className="bg-background/10 border-background/30 text-background"
                >
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hair-styling">Hair Styling</SelectItem>
                  <SelectItem value="beauty">Beauty Services</SelectItem>
                  <SelectItem value="makeup">Makeup Artistry</SelectItem>
                  <SelectItem value="grooming">Men's Grooming</SelectItem>
                  <SelectItem value="academy">Academy Courses</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-background">Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    data-testid="button-date-picker"
                    className="w-full justify-start text-left font-normal bg-background/10 border-background/30 text-background hover:bg-background/20"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span className="text-background/50">Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6"
                data-testid="button-submit-booking"
              >
                Book Now
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleWhatsApp}
                data-testid="button-whatsapp"
                className="flex-1 bg-background/10 border-background/30 text-background hover:bg-background/20 font-semibold py-6"
              >
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
