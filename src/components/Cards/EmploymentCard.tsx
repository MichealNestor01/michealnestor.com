import React from "react";
import "./Card.css";

type EmploymentCardProps = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[]; // max length of 4
};

const EmploymentCard: React.FC<EmploymentCardProps> = ({
  company,
  role,
  startDate,
  endDate,
  description,
  skills,
}) => {
  const top4skills = skills.slice(0, 4);
  return (
    <div className="card w-full text-l p-4">
      <header className="flex items-center justify-start relative">
        {/* <div id="employment-spine-connector" className="bg-accent-colour" /> */}
        <div id="employment-interface" className="bg-accent-colour" />
        <h1 className="main-colour text-3xl">{company}</h1>
        <div id="separator-circle" className="ml-4 bg-secondary-colour" />
        <h2 className="secondary-colour ml-4">{role}</h2>
      </header>
      <section className="secondary-colour mt-1 flex items-center justify-start">
        <p>{startDate}</p>
        <div id="separator-line" className="ml-2 bg-secondary-colour" />
        <p className="ml-2">{endDate}</p>
      </section>
      <p className="secondary-colour text-justify mt-1 h-32">{description}</p>
      <section className="accent-colour flex items-center justify-start mt-1">
        {top4skills.map((skill, index) => (
          <>
            {index !== 0 && (
              <div id="separator-circle" className="ml-4 bg-accent-colour" />
            )}
            <p
              key={company + "skill" + index}
              className={index !== 0 ? "ml-4" : ""}
            >
              {skill}
            </p>
          </>
        ))}
      </section>
    </div>
  );
};

export default EmploymentCard;
