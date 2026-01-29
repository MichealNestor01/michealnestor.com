import skillsData from "../data/skills.json";
import type { SkillsData, SkillsCategory } from "../types/models";
import { SectionTitle } from "./ui/sectionTitle";
import { SkillBadge } from "./ui/skillBadge";

/**
 * Skills section component.
 * Displays categorized technical skills and hobbies/interests.
 * Features animated skill badges with icons and hover effects.
 *
 * @component
 * @returns {JSX.Element} The skills section
 */
export const SkillsSection = () => {
  const skills: SkillsData = skillsData as SkillsData;

  return (
    <section id="skills" className="section-container relative overflow-hidden">
      <SectionTitle title="Skills & Interests" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-10">
        {skills.categories.map((category: SkillsCategory) => (
          <div
            key={category.name}
            className="enhanced-glass p-6 rounded-lg backdrop-blur-xl border border-white/10 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill: string) => (
                <SkillBadge
                  key={`${category.name}-${skill}`}
                  name={skill}
                  variant="skill"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="enhanced-glass p-6 rounded-lg max-w-3xl mx-auto backdrop-blur-xl border border-white/10 shadow-lg relative z-10">
        <h3 className="text-xl font-semibold mb-4">Hobbies & Interests</h3>
        <div className="flex flex-wrap gap-2">
          {skills.hobbies.map((hobby: string) => (
            <SkillBadge key={hobby} name={hobby} variant="hobby" />
          ))}
        </div>
      </div>
    </section>
  );
};
