import { AcademySection, defaultCourses } from '../AcademySection';
import beforeHair from '@assets/generated_images/Hair_transformation_before_photo_e3f0c273.png';
import afterHair from '@assets/generated_images/Hair_transformation_after_photo_656d3913.png';
import beforeMakeup from '@assets/generated_images/Makeup_transformation_before_photo_1844bb0e.png';
import afterMakeup from '@assets/generated_images/Makeup_transformation_after_photo_11d650c9.png';

export default function AcademySectionExample() {
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

  return <AcademySection courses={defaultCourses} studentWork={studentWork} />;
}
