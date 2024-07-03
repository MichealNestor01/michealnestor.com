import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { IconArticle, IconPlayerPlay } from "@tabler/icons-react";

type ProjectCardProps = {
  title: string;
  description: string;
  date: string;
  skills: string[]; // max length of 4
  learnMoreProjectEndpoint: string;
  runProjectEndpoint?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  date,
  description,
  skills,
  learnMoreProjectEndpoint,
  runProjectEndpoint,
}) => {
  const top4skills = skills.slice(0, 4);
  return (
    <div className="card w-4/5 text-l p-4">
      <header className="flex items-center justify-start">
        <h1 className="main-colour text-3xl">{title}</h1>
        <div id="separator-circle" className="ml-4 bg-secondary-colour" />
        <h2 className="secondary-colour ml-4">{date}</h2>
      </header>
      <p className="secondary-colour text-justify mt-1">{description}</p>
      <section className="accent-colour flex items-center justify-start mt-1">
        {top4skills.map((skill, index) => (
          <>
            {index !== 0 && (
              <div id="separator-circle" className="ml-4 bg-accent-colour" />
            )}
            <p
              key={title + "skill" + index}
              className={index !== 0 ? "ml-4" : ""}
            >
              {skill}
            </p>
          </>
        ))}
      </section>
      <section className="flex items-center justify-between mt-1">
        <Link
          className="card-button text-button-colour bg-accent-colour"
          to={`/projects/${learnMoreProjectEndpoint}`}
        >
          <p>Learn More</p> <IconArticle />
        </Link>
        {runProjectEndpoint &&
          (runProjectEndpoint.includes("http") ? (
            <a
              className="main-colour card-button hover:text-accent-colour"
              href={runProjectEndpoint}
              target="_blank"
              rel="noreferrer"
            >
              <p>Run Project</p> <IconPlayerPlay />
            </a>
          ) : (
            <Link
              className="main-colour card-button hover:text-accent-colour"
              to={`/localProjects/${runProjectEndpoint}`}
            >
              <p>Run Project</p> <IconPlayerPlay />
            </Link>
          ))}
      </section>
    </div>
  );
};

export default ProjectCard;
