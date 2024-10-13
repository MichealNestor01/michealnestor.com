import SkillsSpinner from "./SkillsSpinner";

export default function EmploymentSection() {
  return (
    <section className="grid grid-cols-1 w-full">
      <div className="sticky top-0 row-start-1 col-start-1 bg-green-400 h-96">
        <div className="mt-20 text-8xl font-bold text-accent-colour2">
          <h1 className="">MY</h1>
          <h1>EXPERIENCE</h1>
        </div>
        <SkillsSpinner />
      </div>
      <div className="relative row-start-1 col-start-1 flex flex-row justify-end w-full min-h-big">
        <div className="w-1/2 bg-red-400/50">Actual Experience</div>
      </div>
    </section>
  );
}
