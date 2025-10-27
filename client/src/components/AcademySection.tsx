import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Award, Clock, Users } from "lucide-react";

interface Course {
  id: string;
  title: string;
  duration: string;
  students: string;
  description: string;
}

interface StudentWork {
  id: string;
  before: string;
  after: string;
  studentName: string;
}

interface AcademySectionProps {
  courses: Course[];
  studentWork: StudentWork[];
}

export function AcademySection({ courses, studentWork }: AcademySectionProps) {
  const [currentWork, setCurrentWork] = useState(0);

  const nextWork = () => {
    setCurrentWork((prev) => (prev + 1) % studentWork.length);
  };

  const prevWork = () => {
    setCurrentWork((prev) => (prev - 1 + studentWork.length) % studentWork.length);
  };

  const current = studentWork[currentWork];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            JBN Beauty Academy
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Launch your career in beauty with professional certification programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, idx) => (
            <Card key={course.id} data-testid={`card-course-${idx}`} className="hover-elevate">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{course.description}</p>
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-primary" />
                    <span>Certified Program</span>
                  </div>
                </div>
                <Button className="w-full mt-4" data-testid={`button-enroll-${idx}`}>
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {studentWork.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl font-semibold text-center mb-8">
              Student Success Stories
            </h3>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2 text-center">Before</p>
                  <img
                    src={current.before}
                    alt="Before"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <p className="text-sm text-primary mb-2 text-center font-semibold">After</p>
                  <img
                    src={current.after}
                    alt="After"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              <p className="text-center mt-4 font-medium">
                By {current.studentName}
              </p>

              <Button
                size="icon"
                variant="outline"
                onClick={prevWork}
                data-testid="button-prev-student-work"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden lg:flex"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                size="icon"
                variant="outline"
                onClick={nextWork}
                data-testid="button-next-student-work"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden lg:flex"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export const defaultCourses: Course[] = [
  {
    id: '1',
    title: 'Professional Hair Styling',
    duration: '3 months',
    students: '500+ graduated',
    description: 'Master cutting, coloring, and styling techniques'
  },
  {
    id: '2',
    title: 'Makeup Artistry',
    duration: '2 months',
    students: '300+ graduated',
    description: 'Learn bridal, editorial, and special effects makeup'
  },
  {
    id: '3',
    title: 'Beauty Therapy',
    duration: '4 months',
    students: '400+ graduated',
    description: 'Comprehensive skin care and spa treatments'
  }
];
