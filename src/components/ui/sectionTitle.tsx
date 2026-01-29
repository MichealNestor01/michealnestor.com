import { motion } from "framer-motion";
import { fadeInUpProps } from "../../lib/animations";

/**
 * Props for SectionTitle component.
 *
 * @interface SectionTitleProps
 */
type SectionTitleProps = {
  /** The title text to display */
  title: string;
};

/**
 * Reusable section title component with fade-in animation.
 * Used consistently across all major sections of the portfolio.
 *
 * @component
 * @param {SectionTitleProps} props - Component props
 * @returns {JSX.Element} Animated section title
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <motion.h2 className="section-title" {...fadeInUpProps}>
    {title}
  </motion.h2>
);
