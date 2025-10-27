import { GallerySection } from '../GallerySection';
import gallery1 from '@assets/generated_images/Gallery_hairstyle_photo_1_243a4573.png';
import gallery2 from '@assets/generated_images/Gallery_hairstyle_photo_2_f7b3fea2.png';
import gallery3 from '@assets/generated_images/Gallery_men\'s_haircut_photo_5726d2e4.png';
import beforeHair from '@assets/generated_images/Hair_transformation_before_photo_e3f0c273.png';
import afterHair from '@assets/generated_images/Hair_transformation_after_photo_656d3913.png';
import afterMakeup from '@assets/generated_images/Makeup_transformation_after_photo_11d650c9.png';

export default function GallerySectionExample() {
  const images = [
    { id: '1', src: gallery1, alt: 'Beautiful blonde waves' },
    { id: '2', src: gallery2, alt: 'Modern pixie cut' },
    { id: '3', src: gallery3, alt: 'Men\'s fade haircut' },
    { id: '4', src: afterHair, alt: 'Hair transformation' },
    { id: '5', src: afterMakeup, alt: 'Bridal makeup' },
    { id: '6', src: beforeHair, alt: 'Hair styling' }
  ];

  return <GallerySection images={images} />;
}
