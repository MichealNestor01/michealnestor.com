import { motion } from "framer-motion";
import personal from "../data/personal.json";
import type { Personal } from "../types/models";
import { fadeInUpProps, staggerContainerVariants, staggerItemVariants, viewportConfig } from "../lib/animations";

/**
 * About section component.
 * Displays personal information, bio, and quick facts about the portfolio owner.
 * Features a two-column layout with animated content entry.
 *
 * @component
 * @returns {JSX.Element} The about section
 */
export const AboutSection = () => {
  const personalData = personal as Personal;
  return (
    <section id="about" className="section-container">
      <motion.h2 className="section-title" {...fadeInUpProps}>
        About Me
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row gap-10"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <motion.div className="md:w-2/3" variants={staggerItemVariants}>
          <p className="text-lg leading-relaxed mb-6 glass p-6 rounded-lg">
            {personalData.about}
          </p>
        </motion.div>

        <motion.div className="md:w-1/3" variants={staggerItemVariants}>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-medium mr-2">Name Pronunciation:</span>
                <span>Me-haul Nes-tor</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Location:</span>
                <span>{personalData.location}</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">LinkedIn:</span>
                <a
                  href={`https://${personalData.linkedIn}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline break-all"
                >
                  {personalData.linkedIn}
                </a>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Focus:</span>
                <span>Equities Risk Systems, Data Science</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
