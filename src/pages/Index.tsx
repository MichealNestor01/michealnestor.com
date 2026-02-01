import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

/**
 * Main index page component.
 * Renders the complete portfolio website with all sections and page-level animations.
 *
 * @component
 * @returns {JSX.Element} The main portfolio page
 */
const Index = () => {
  useEffect(() => {
    document.title = "Micheal Nestor | Software Engineer";
  }, []);

  return (
    <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {/* Global animated background */}
          <AnimatedBackground />

          <Header />
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection />
            <SkillsSection />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
  );
};

export default Index;
