import SkillsSpinner from "./SkillsSpinner";
import EmploymentCard from "../Cards/EmploymentCard";

export default function EmploymentSection() {
  return (
    <section className="grid grid-cols-1 w-full">
      <div className="sticky top-0 row-start-1 col-start-1 h-fit">
        <div className="mt-10 text-8xl font-bold text-accent-colour">
          <h1>MY</h1>
          <h1>EXPERIENCE</h1>
        </div>
        <SkillsSpinner />
        <div className="mb-10" />
      </div>
      <div className="relative row-start-1 col-start-1 flex flex-row justify-end w-full h-fit">
        <div className="w-1/2 flex flex-col items-end">
          <div className="mb-14" />
          <EmploymentCard
            company="Bank of America"
            role="Technology Analyst"
            startDate="10/07/24"
            endDate="Present"
            description="Software Engineer in the Equities Linked Technology team."
            skills={[
              "Python",
              "Scaled Agile",
              "Elastic Search",
              "Information Visualisation",
            ]}
          />
          <div className="mb-20" />
          <EmploymentCard
            company="Bank of America"
            role="Summer Technology Analyst"
            startDate="20/06/23"
            endDate="28/08/23"
            description="I wasn an intern working in the Equities Linked  Technology Team. I worked on an automated report that identifies inefficiencies in the intra-day risk engine, delivers insights on how to address these inefficiencies and recommends how work should be redistributed across the grid."
            skills={[
              "Python",
              "Scaled Agile",
              "Elastic Search",
              "Data Science",
            ]}
          />
          <div className="mb-20" />
          <EmploymentCard
            company="BAE Systems DI"
            role="Software Engineer Intern"
            startDate="20/06/22"
            endDate="20/09/22"
            description="I was placed in the national security buisness  area, and worked closely with law enforcement agencies to research and  create new software for them."
            skills={[
              "Python",
              "Machine Learning",
              "Web Scraping",
              "Containerisation",
            ]}
          />
          <div className="mb-20" />
          <EmploymentCard
            company="University of Leeds"
            role="Student Amabassador"
            startDate="01/08/21"
            endDate="01/07/24"
            description="Student ambassador for Computer Science for my year, worke closely with department leadership, module leaders and the student support office to ensure that any issues facing my peers were brought to light and addressed promptly and effectively."
            skills={[
              "Leadership",
              "Arbitration",
              "Negotiation",
              "Professional Communication",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
