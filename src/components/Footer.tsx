import { motion } from "framer-motion";
import { staggerItemVariants } from "../lib/animations";

/**
 * Footer component displaying copyright and technology stack information.
 * Features animated text entry on component mount.
 *
 * @component
 * @returns {JSX.Element} The footer component
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={staggerItemVariants}
          className="text-muted-foreground text-sm"
        >
          © {currentYear} Micheal Nestor. All rights reserved.
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={staggerItemVariants}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-sm mt-2 md:mt-0"
        >
          Built with React, Redux & Tailwind CSS
        </motion.p>
      </div>
    </footer>
  );
};
