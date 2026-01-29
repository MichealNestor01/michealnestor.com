import { motion } from "framer-motion";
import { ReactNode } from "react";
import { SectionTitle } from "./sectionTitle";
import {
  staggerContainerVariants,
  staggerItemVariants,
  viewportConfig,
} from "../../lib/animations";

/**
 * Props for TimelineSection component.
 *
 * @interface TimelineSectionProps
 */
type TimelineSectionProps<T> = {
  /** Section ID for navigation */
  id: string;
  /** Section title */
  title: string;
  /** Optional header action (e.g., download button) */
  headerAction?: ReactNode;
  /** Optional background class variant */
  backgroundClass?: string;
  /** Array of items to render */
  items: T[];
  /** Function to render each item */
  renderItem: (item: T, index: number) => ReactNode;
  /** Optional function to generate unique keys for items */
  getItemKey?: (item: T, index: number) => string | number;
};

/**
 * Reusable timeline section wrapper component.
 * Handles section container, title, animations, and item mapping.
 *
 * @component
 * @template T - Type of items in the timeline
 * @param {TimelineSectionProps<T>} props - Component props
 * @returns {JSX.Element} Timeline section with animated items
 */
export const TimelineSection = <T,>({
  id,
  title,
  headerAction,
  backgroundClass = "",
  items,
  renderItem,
  getItemKey,
}: TimelineSectionProps<T>) => {
  return (
    <section id={id} className={`section-container ${backgroundClass}`}>
      <div className="flex items-center justify-between mb-4">
        <SectionTitle title={title} />
        {headerAction && <div className="ml-3">{headerAction}</div>}
      </div>
      <motion.div
        className="max-w-3xl mx-auto"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {items.map((item, index) => {
          const key = getItemKey ? getItemKey(item, index) : index;
          return (
            <motion.div
              key={key}
              className="timeline-item"
              variants={staggerItemVariants}
            >
              {renderItem(item, index)}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
