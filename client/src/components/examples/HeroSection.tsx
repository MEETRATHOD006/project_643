import { HeroSection } from '../HeroSection';

export default function HeroSectionExample() {
  return <HeroSection onBookClick={() => console.log('Book clicked')} />;
}
