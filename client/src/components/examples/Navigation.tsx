import { Navigation } from '../Navigation';

export default function NavigationExample() {
  return <Navigation onBookClick={() => console.log('Nav book clicked')} />;
}
