import educationData from "../data/education.json";
import type { Education, Certification } from "../types/models";
import { TimelineSection } from "./ui/timelineSection";
import { TimelineItem } from "./ui/timelineItem";

export const EducationSection = () => {
  const educations: Education[] = educationData.educations as Education[];
  const certifications: Certification[] = (educationData as any).certifications as Certification[] || [];
  
  return (
    <>
      <TimelineSection
        id="education"
        title="Education"
        items={educations}
        getItemKey={(education: Education, index: number) =>
          `${education.institution}-${index}`
        }
        renderItem={(education: Education, index: number) => {
          const additionalContent = education.grades ? (
            <p className="text-sm mb-3">Grades: {education.grades}</p>
          ) : undefined;

          return (
            <TimelineItem
              title={education.institution}
              subtitle={education.degree}
              duration={education.duration || ""}
              description={education.description}
              additionalContent={additionalContent}
            />
          );
        }}
      />
      {certifications && certifications.length > 0 && (
        <section id="certifications" className="pt-4 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert: Certification, index: number) => (
                <div
                  key={index}
                  className="bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6 border border-white/5 dark:border-white/10"
                >
                  <h3 className="text-lg font-semibold mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
