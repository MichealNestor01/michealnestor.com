import Card from "../components/Cards/EmploymentCard";

export default function Landing() {
  return (
    <section>
      <h1 className="text-l text-primary-colour">landing page</h1>
      <div className="w-1/2 h-96">
        <Card
          company="Bank of America"
          role="Summer Technology Analyst"
          startDate="20/06/23"
          endDate="28/08/23"
          description="I wasn an intern working in the Equities Linked  Technology Team. I worked on an automated report that identifies inefficiencies in the intra-day risk engine, delivers insights on how to address these inefficiencies and recommends how work should be redistributed across the grid."
          skills={["Python", "Scaled Agile", "Elastic Search", "Data Science"]}
        />
      </div>
    </section>
  );
}
