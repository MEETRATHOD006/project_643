import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ServicesSection, defaultServices } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { AboutSection } from "@/components/AboutSection";
import { AcademySection, defaultCourses } from "@/components/AcademySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BookingSection } from "@/components/BookingSection";
import { ContactSection } from "@/components/ContactSection";
import { FloatingBookButton } from "@/components/FloatingBookButton";
import { Footer } from "@/components/Footer";

import beforeHair from '@assets/generated_images/Hair_transformation_before_photo_e3f0c273.png';
import afterHair from '@assets/generated_images/Hair_transformation_after_photo_656d3913.png';
import beforeMakeup from '@assets/generated_images/Makeup_transformation_before_photo_1844bb0e.png';
import afterMakeup from '@assets/generated_images/Makeup_transformation_after_photo_11d650c9.png';
import hairService from '@assets/generated_images/Hair_styling_service_image_22697d29.png';
import makeupService from '@assets/generated_images/Makeup_service_image_44875ef2.png';
import groomingService from '@assets/generated_images/Grooming_service_image_4765153b.png';
import academyService from '@assets/generated_images/Academy_training_image_03c97343.png';
import gallery1 from '@assets/generated_images/Gallery_hairstyle_photo_1_243a4573.png';
import gallery2 from '@assets/generated_images/Gallery_hairstyle_photo_2_f7b3fea2.png';
import gallery3 from '@assets/generated_images/Gallery_men\'s_haircut_photo_5726d2e4.png';
import founderImage from '@assets/generated_images/Salon_founder_portrait_1c381eb4.png';
import client1 from '@assets/generated_images/Client_testimonial_photo_1_0f9ff0f0.png';
import client2 from '@assets/generated_images/Client_testimonial_photo_2_12063f35.png';
import client3 from '@assets/generated_images/Client_testimonial_photo_3_3cfba7cf.png';

export default function Home() {
  const bookingSectionRef = useRef<HTMLDivElement>(null);

  const scrollToBooking = () => {
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const transformations = [
    {
      id: '1',
      before: beforeHair,
      after: afterHair,
      title: 'Hair Transformation'
    },
    {
      id: '2',
      before: beforeMakeup,
      after: afterMakeup,
      title: 'Bridal Makeup'
    }
  ];

  const servicesWithImages = defaultServices.map((service, idx) => ({
    ...service,
    image: [hairService, makeupService, groomingService, makeupService, academyService][idx]
  }));

  const galleryImages = [
    { id: '1', src: gallery1, alt: 'Beautiful blonde waves' },
    { id: '2', src: gallery2, alt: 'Modern pixie cut' },
    { id: '3', src: gallery3, alt: 'Men\'s fade haircut' },
    { id: '4', src: afterHair, alt: 'Hair transformation' },
    { id: '5', src: afterMakeup, alt: 'Bridal makeup' },
    { id: '6', src: beforeHair, alt: 'Hair styling' }
  ];

  const studentWork = [
    {
      id: '1',
      before: beforeHair,
      after: afterHair,
      studentName: 'Sarah Chen - Hair Styling Student'
    },
    {
      id: '2',
      before: beforeMakeup,
      after: afterMakeup,
      studentName: 'Priya Sharma - Makeup Artistry Student'
    }
  ];

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

  const contactInfo = {
    address: '123 Beauty Street, Fashion District, City Name 12345',
    phone: '+1 (555) 123-4567',
    email: 'info@jbnsalon.com',
    hours: [
      { day: 'Monday - Friday', time: '9:00 AM - 8:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 6:00 PM' },
      { day: 'Sunday', time: '10:00 AM - 4:00 PM' }
    ],
    socials: {
      instagram: 'https://instagram.com/jbnsalon',
      youtube: 'https://youtube.com/@jbnsalon',
      whatsapp: 'https://wa.me/15551234567'
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onBookClick={scrollToBooking} />
      <HeroSection onBookClick={scrollToBooking} />
      <BeforeAfterSlider transformations={transformations} />
      <div id="services">
        <ServicesSection services={servicesWithImages} />
      </div>
      <div id="gallery">
        <GallerySection images={galleryImages} />
      </div>
      <div id="about">
        <AboutSection
          image={founderImage}
          title="About JBN"
          description={[
            "At JBN Unisex Salon and Academy, we believe beauty is more than skin deep—it's about confidence, expression, and empowerment.",
            "With years of expertise and a passion for transformation, our team of skilled stylists and beauty professionals is dedicated to bringing out the best in every client.",
            "From cutting-edge hairstyling to professional makeup artistry and comprehensive beauty training, we're here to help you look and feel your absolute best."
          ]}
        />
      </div>
      <div id="academy">
        <AcademySection courses={defaultCourses} studentWork={studentWork} />
      </div>
      <TestimonialsSection testimonials={testimonials} />
      <div id="booking" ref={bookingSectionRef}>
        <BookingSection />
      </div>
      <div id="contact">
        <ContactSection
          contactInfo={contactInfo}
          mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841257386634!2d-73.98823492404069!3d40.75798007138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
        />
      </div>
      <Footer />
      <FloatingBookButton onClick={scrollToBooking} />
    </div>
  );
}
