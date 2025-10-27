import { AboutSection } from '../AboutSection';
import founderImage from '@assets/generated_images/Salon_founder_portrait_1c381eb4.png';

export default function AboutSectionExample() {
  return (
    <AboutSection
      image={founderImage}
      title="About JBN"
      description={[
        "At JBN Unisex Salon and Academy, we believe beauty is more than skin deep—it's about confidence, expression, and empowerment.",
        "With years of expertise and a passion for transformation, our team of skilled stylists and beauty professionals is dedicated to bringing out the best in every client.",
        "From cutting-edge hairstyling to professional makeup artistry and comprehensive beauty training, we're here to help you look and feel your absolute best."
      ]}
    />
  );
}
