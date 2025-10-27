import { ServicesSection, defaultServices } from '../ServicesSection';
import hairService from '@assets/generated_images/Hair_styling_service_image_22697d29.png';
import makeupService from '@assets/generated_images/Makeup_service_image_44875ef2.png';
import groomingService from '@assets/generated_images/Grooming_service_image_4765153b.png';
import academyService from '@assets/generated_images/Academy_training_image_03c97343.png';

export default function ServicesSectionExample() {
  const servicesWithImages = defaultServices.map((service, idx) => ({
    ...service,
    image: [hairService, makeupService, groomingService, makeupService, academyService][idx]
  }));

  return <ServicesSection services={servicesWithImages} />;
}
