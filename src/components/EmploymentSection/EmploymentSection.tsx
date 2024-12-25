import SkillsSpinner from "./SkillsSpinner";
import EmploymentCard from "../Cards/EmploymentCard";
import workExperienceData from "../../data/workExperience.json";
import { IconMouse } from "@tabler/icons-react";

export default function EmploymentSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center cursor-pointer   hover-transition">
        <IconMouse size={100} />
        <h1>Scroll</h1>
      </div>
      <section className="grid grid-cols-1 w-full ">
        <div className="sticky top-0 row-start-1 col-start-1 h-fit">
          <div className="text-9xl font-bold text-accent-colour">
            <h1>MY</h1>
            <h1>EXPERIENCE</h1>
          </div>
          <SkillsSpinner />
        </div>
        <div className="relative row-start-1 col-start-1 flex flex-row justify-end w-full h-fit">
          <div className="w-1/2 flex flex-col  items-end  relative">
            <div className="mb-1" />
            {workExperienceData.map((experience, index) => (
              <>
                <div
                  key={`spineConnector-${index}`}
                  id="employment-spine-connector"
                />
                <EmploymentCard
                  key={`employmentCard-${index}`}
                  company={experience.company}
                  role={experience.role}
                  startDate={experience.startDate}
                  endDate={experience.endDate}
                  description={experience.description}
                  skills={experience.skills}
                />
                <div key={`buffer-${index}`} className="mb-12" />
              </>
            ))}
            <div className="mb-10" />
          </div>
        </div>
      </section>
    </>
  );
}
