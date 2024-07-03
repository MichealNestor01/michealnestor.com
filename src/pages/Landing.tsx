import EmploymentCard from "../components/Cards/EmploymentCard";
import ProjectCard from "../components/Cards/ProjectCard";
import thumbnail_rwp from "../assets/thumbnail_rwp.svg";

export default function Landing() {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-l text-primary-colour">landing page</h1>
      <div className="w-1/2 h-96">
        <EmploymentCard
          company="Bank of America"
          role="Summer Technology Analyst"
          startDate="20/06/23"
          endDate="28/08/23"
          description="I wasn an intern working in the Equities Linked  Technology Team. I worked on an automated report that identifies inefficiencies in the intra-day risk engine, delivers insights on how to address these inefficiencies and recommends how work should be redistributed across the grid."
          skills={["Python", "Scaled Agile", "Elastic Search", "Data Science"]}
        />
        <div className="h-20 w-4" />
      </div>
      <div className="w-4/5">
        <ProjectCard
          title="Russian Word Profiler"
          description="An open source linguistics analysis tool designed for researchers and teachers of the Russian language developed in partnership with the University of Leeds Department of Russian and Slavonic Studdies."
          skills={["Python", "Javascript", "React.js", "Flask"]}
          thumbnail={thumbnail_rwp}
          learnMoreProjectEndpoint={"russian-word-profiler"}
          runProjectEndpoint="https://russianwordprofiler.pythonanywhere.com/"
        />
      </div>
    </section>
  );
}
