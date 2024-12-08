import SkillsSpinner from "./SkillsSpinner";
import EmploymentCard from "../Cards/EmploymentCard";
import workExperienceData from "../../data/workExperience.json";

export default function EmploymentSection() {
  return (
    <section className="grid grid-cols-1 w-full">
      <div className="sticky top-0 row-start-1 col-start-1 h-fit">
        <div className="mt-10 text-8xl font-bold text-accent-colour">
          <h1>MY</h1>
          <h1>EXPERIENCE</h1>
        </div>
        <SkillsSpinner />
      </div>
      <div className="relative row-start-1 col-start-1 flex flex-row justify-end w-full h-fit">
        <div className="w-1/2 flex flex-col items-end">
          {workExperienceData.map((experience, index) => (
            <div key={index} className="mb-24">
              <EmploymentCard
                company={experience.company}
                role={experience.role}
                startDate={experience.startDate}
                endDate={experience.endDate}
                description={experience.description}
                skills={experience.skills}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
