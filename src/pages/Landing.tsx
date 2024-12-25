import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";

import ProjectCard from "../components/Cards/ProjectCard";
import thumbnail_rwp from "../assets/thumbnail_rwp.svg";
import LandingSplash from "../components/Splash/LandingSplash";
import EmploymentSection from "../components/EmploymentSection/EmploymentSection";

export default function Landing() {
  return (
    <section className="flex flex-col items-center justify-center">
      <section className="w-full h-[800px] flex items-center justify-between">
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-7xl font-bold text-primary-colour">
            Driven to excel and eager to take on new challenges.
          </h1>
          <h1 className="text-3xl mt-5 text-secondary-colour">
            What do you need solving?
          </h1>
          <Link
            className="landing-button mt-5 text-button-colour bg-accent-colour"
            to={`/portfolio/`}
          >
            <p>Look at my projects</p> <IconArrowRight />
          </Link>
        </div>
        <div className="w-2/3">
          <LandingSplash />
        </div>
      </section>
      <div className="mb-20" />
      <EmploymentSection />
      <div className="mb-20" />
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
      <div className="mb-64" />
    </section>
  );
}
