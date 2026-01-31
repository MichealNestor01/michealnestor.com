import { ReactNode, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import { Button } from "./button";
import { icons } from "./icons";

const ChevronDownIcon = icons.chevronDown;

/**
 * Props for TimelineItem component.
 *
 * @interface TimelineItemProps
 */
type TimelineItemProps = {
  /** Main title (e.g., position or institution) */
  title: string;
  /** Subtitle (e.g., company or degree) */
  subtitle: string;
  /** Duration string */
  duration: string;
  /** Optional location string */
  location?: string;
  /** Optional description (string or array of strings) */
  description?: string | string[];
  /** Optional additional content to display (e.g., grades) */
  additionalContent?: ReactNode;
  /** Whether the item should be collapsible */
  collapsible?: boolean;
  /** Content to show in collapsible section */
  collapsibleContent?: ReactNode;
  /** Optional unique key for collapsible state management */
  itemKey?: string;
  /** Optional open state for collapsible (controlled) */
  open?: boolean;
  /** Optional callback when open state changes */
  onOpenChange?: (open: boolean) => void;
};

/**
 * Reusable timeline item card component.
 * Handles common card structure, title/subtitle/duration rendering,
 * and optional collapsible functionality.
 *
 * @component
 * @param {TimelineItemProps} props - Component props
 * @returns {JSX.Element} Timeline item card
 */
export const TimelineItem = ({
  title,
  subtitle,
  duration,
  location,
  description,
  additionalContent,
  collapsible = false,
  collapsibleContent,
  itemKey,
  open: controlledOpen,
  onOpenChange,
}: TimelineItemProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const handleOpenChange =
    onOpenChange || ((newOpen: boolean) => setInternalOpen(newOpen));

  const renderDescription = () => {
    if (!description) return null;

    if (typeof description === "string") {
      return <p>{description}</p>;
    }

    // Array of strings (for education)
    return (
      <ul className="list-disc pl-5 space-y-1">
        {description.map((desc: string, i: number) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    );
  };

  const content = (
    <div className="glass p-6 rounded-lg">
      <div className="flex flex-col gap-1 md:gap-3 md:flex-row md:justify-between md:items-center">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-primary font-medium mb-2">{subtitle}</p>
          <div className="flex flex-col md:flex-row md:items-start">
            <p className="text-sm text-muted-foreground mb-1 md:mb-3">
              {duration}
              {location && (
                <span className="hidden md:inline">, </span>
              )}
            </p>
            {location && (
              <p className="text-sm text-muted-foreground mb-1 md:mb-3 italic">
                {location}
              </p>
            )}
          </div>
        </div>
        {collapsible && (
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-primary/50 hover:bg-primary/20 transition-all self-start md:self-auto shrink-0 mt-2 mb-1 md:mt-0 md:mb-0"
            >
              <div className="flex items-center gap-2 text-primary text-sm font-medium">
                {!isOpen ? "View details" : "Hide details"}
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </Button>
          </CollapsibleTrigger>
        )}
      </div>

      {renderDescription()}
      {additionalContent}

      {collapsible && collapsibleContent && (
        <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
          <div className="pt-4 space-y-4">{collapsibleContent}</div>
        </CollapsibleContent>
      )}
    </div>
  );

  if (collapsible) {
    return (
      <Collapsible
        className="w-full"
        open={isOpen}
        onOpenChange={handleOpenChange}
      >
        {content}
      </Collapsible>
    );
  }

  return content;
};
