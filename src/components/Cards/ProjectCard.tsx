import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { IconArticle, IconPlayerPlay } from "@tabler/icons-react";

type ProjectCardProps = {
  title: string;
  description: string;
  skills: string[]; // max length of 4
  thumbnail: string;
  learnMoreProjectEndpoint: string;
  runProjectEndpoint?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  skills,
  thumbnail,
  learnMoreProjectEndpoint,
  runProjectEndpoint,
}) => {
  const top4skills = skills.slice(0, 4);
  return (
    <div className="flex items-center justify-center w-full gap-12">
      <img className="w-7/12" src={thumbnail} alt={`${title} thumbnail`} />
      <div className="card w-5/12 text-l p-4">
        <header className="flex items-center justify-start">
          <h1 className="main-colour text-3xl">{title}</h1>
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
        <section className="flex items-center justify-between mt-2">
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
                <p>Launch Project</p> <IconPlayerPlay />
              </a>
            ) : (
              <Link
                className="main-colour card-button hover:text-accent-colour"
                to={`/localProjects/${runProjectEndpoint}`}
              >
                <p>Launch Project</p> <IconPlayerPlay />
              </Link>
            ))}
        </section>
      </div>
    </div>
  );
};

export default ProjectCard;
