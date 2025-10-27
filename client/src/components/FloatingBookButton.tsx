import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface FloatingBookButtonProps {
  onClick: () => void;
}

export function FloatingBookButton({ onClick }: FloatingBookButtonProps) {
  return (
    <Button
      size="lg"
      onClick={onClick}
      data-testid="button-floating-book"
      className="fixed bottom-8 right-8 z-50 bg-primary text-primary-foreground shadow-2xl hover:bg-primary/90 animate-pulse-subtle px-6 py-6 rounded-full"
    >
      <Calendar className="h-5 w-5 mr-2" />
      Book Now
    </Button>
  );
}
