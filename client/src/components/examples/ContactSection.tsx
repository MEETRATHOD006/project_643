import { ContactSection } from '../ContactSection';

export default function ContactSectionExample() {
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
    <ContactSection
      contactInfo={contactInfo}
      mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841257386634!2d-73.98823492404069!3d40.75798007138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
    />
  );
}
