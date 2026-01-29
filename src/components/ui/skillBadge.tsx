import { skillIcons } from "../../data/skillIcons";
import { icons } from "./icons";

interface SkillBadgeProps {
  /** The name of the skill or hobby */
  name: string;
  /** Variant determines the background styling */
  variant: "skill" | "hobby";
}

/**
 * Reusable badge component for displaying skills and hobbies.
 * Handles icon/emoji lookup and rendering with variant-specific styling.
 *
 * @component
 * @param {SkillBadgeProps} props - Component props
 * @returns {JSX.Element} Skill badge element
 */
export const SkillBadge = ({ name, variant }: SkillBadgeProps) => {
  const entry = skillIcons[name];
  const Icon = entry && "icon" in entry ? icons[entry.icon] : null;

  // Variant-specific background classes
  const backgroundClass =
    variant === "skill"
      ? "bg-secondary/50 dark:bg-secondary/30"
      : "bg-accent/10";

  return (
    <span
      className={`px-3 py-2 ${backgroundClass} rounded-md backdrop-blur-sm border border-white/5 dark:border-white/10 flex items-center gap-2`}
    >
      {entry ? (
        Icon ? (
          <Icon
            className="w-4 h-4"
            style={{ color: entry.color || "currentColor" }}
            aria-hidden="true"
          />
        ) : "emoji" in entry ? (
          <span role="img" aria-label={name} className="text-base">
            {entry.emoji}
          </span>
        ) : null
      ) : null}
      <span>{name}</span>
    </span>
  );
};
