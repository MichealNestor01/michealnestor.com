import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import personalData from "../data/personal.json";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInVariants } from "../lib/animations";

const SCROLL_THRESHOLD = 10;

/**
 * Header component with navigation and theme toggle.
 * Features a fixed position header that becomes opaque on scroll,
 * responsive mobile menu, and smooth navigation links.
 *
 * @component
 * @returns {JSX.Element} The header component
 */
export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Closes the mobile menu when a navigation link is clicked.
   */
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10 ${
        scrolled ? "glass shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <motion.a
          href="#hero"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.5 }}
          className="text-lg font-medium text-foreground"
        >
          {personalData.name.split(" ")[0]}
        </motion.a>

        <nav className="hidden md:flex items-center space-x-6 font-medium text-sm">
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a
            href="#experience"
            className="hover:text-primary transition-colors"
          >
            Experience
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-primary transition-colors">
            Skills
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <button
            className="md:hidden rounded-md p-2 text-foreground hover:bg-secondary"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden mt-4 glass rounded-lg p-4 mx-auto max-w-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col space-y-3">
              <a
                href="#about"
                className="hover:text-primary transition-colors py-1"
                onClick={handleNavLinkClick}
              >
                About
              </a>
              <a
                href="#experience"
                className="hover:text-primary transition-colors py-1"
                onClick={handleNavLinkClick}
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-primary transition-colors py-1"
                onClick={handleNavLinkClick}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:text-primary transition-colors py-1"
                onClick={handleNavLinkClick}
              >
                Skills
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
