import { useState } from "react";
import { icons } from "./ui/icons";
import experienceData from "../data/experience.json";
import { Button } from "@/components/ui/button";
import type { Experience } from "../types/models";
import { TimelineSection } from "./ui/timelineSection";
import { TimelineItem } from "./ui/timelineItem";

const DownloadIcon = icons.download;

/**
 * Experience section component.
 * Displays work experience entries with collapsible details including achievements and skills.
 * Includes a CV download button and animated entry effects.
 *
 * @component
 * @returns {JSX.Element} The experience section
 */
export const ExperienceSection = () => {
  const experiences: Experience[] = experienceData.experiences as Experience[];
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  /**
   * Toggles the open/closed state of an experience item.
   *
   * @param {string} key - Unique identifier for the experience item
   */
  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const cvDownloadButton = (
    <a
      href="/cv.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-1"
      >
        <DownloadIcon className="h-4 w-4" />
        <span>Download CV</span>
      </Button>
    </a>
  );

  return (
    <TimelineSection
      id="experience"
      title="Experience"
      headerAction={cvDownloadButton}
      backgroundClass="bg-secondary/30"
      items={experiences}
      getItemKey={(experience: Experience, index: number) =>
        `${experience.company}-${index}`
      }
      renderItem={(experience: Experience, index: number) => {
        const itemKey = `${experience.company}-${index}`;
        const collapsibleContent = (
          <>
            {experience.achievements &&
              experience.achievements.length > 0 && (
                <div>
                  <h4 className="font-medium text-lg mb-2">
                    Key Achievements
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {experience.achievements.map(
                      (achievement: string, i: number) => (
                        <li key={i} className="text-sm">
                          {achievement}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

            {experience.skills && experience.skills.length > 0 && (
              <div>
                <h4 className="font-medium text-lg mb-2">Skills Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill: string, i: number) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        );

        return (
          <TimelineItem
            title={experience.position}
            subtitle={experience.company}
            duration={experience.duration}
            location={experience.location}
            description={experience.description}
            collapsible={true}
            collapsibleContent={collapsibleContent}
            itemKey={itemKey}
            open={!!openItems[itemKey]}
            onOpenChange={(open) => {
              setOpenItems((prev) => ({
                ...prev,
                [itemKey]: open,
              }));
            }}
          />
        );
      }}
    />
  );
};
