import { TestimonialsSection } from '../TestimonialsSection';
import client1 from '@assets/generated_images/Client_testimonial_photo_1_0f9ff0f0.png';
import client2 from '@assets/generated_images/Client_testimonial_photo_2_12063f35.png';
import client3 from '@assets/generated_images/Client_testimonial_photo_3_3cfba7cf.png';

export default function TestimonialsSectionExample() {
  const testimonials = [
    {
      id: '1',
      name: 'Emma Wilson',
      service: 'Bridal Makeup',
      photo: client1,
      quote: 'The team at JBN made me feel like a princess on my wedding day. The makeup was flawless and lasted all day!'
    },
    {
      id: '2',
      name: 'Michael Roberts',
      service: 'Men\'s Grooming',
      photo: client2,
      quote: 'Best haircut I\'ve ever had! The attention to detail and professionalism is unmatched. Highly recommend!'
    },
    {
      id: '3',
      name: 'Sophia Anderson',
      service: 'Hair Transformation',
      photo: client3,
      quote: 'I came in wanting a complete change and left feeling absolutely amazing. The stylists really know their craft!'
    }
  ];

  return <TestimonialsSection testimonials={testimonials} />;
}
