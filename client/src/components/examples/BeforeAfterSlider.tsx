import { BeforeAfterSlider } from '../BeforeAfterSlider';
import beforeHair from '@assets/generated_images/Hair_transformation_before_photo_e3f0c273.png';
import afterHair from '@assets/generated_images/Hair_transformation_after_photo_656d3913.png';
import beforeMakeup from '@assets/generated_images/Makeup_transformation_before_photo_1844bb0e.png';
import afterMakeup from '@assets/generated_images/Makeup_transformation_after_photo_11d650c9.png';

export default function BeforeAfterSliderExample() {
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

  return <BeforeAfterSlider transformations={transformations} />;
}
