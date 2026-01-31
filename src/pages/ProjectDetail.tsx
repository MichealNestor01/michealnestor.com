import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import projectsData from "../data/projects.json";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DemoViewer from "../components/DemoViewer";
import type { Project } from "../types/models";
import { icons } from "@/components/ui/icons";
import { fadeInVariants } from "../lib/animations";

const CalendarIcon = icons.calendar;
const GithubIcon = icons.githubSquare;

/**
 * Formats a date string to a human-readable format.
 *
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string
 */
const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Mobile-friendly indicator component.
 * Displays a badge indicating whether the project is mobile-friendly.
 *
 * @param {Object} props - Component props
 * @param {boolean} props.mobileFriendly - Whether the project is mobile-friendly
 * @returns {JSX.Element | null} Mobile indicator badge or null
 */
const MobileIndicator = ({
  mobileFriendly,
}: {
  mobileFriendly: boolean;
}) => {
  if (mobileFriendly) {
    return (
      <span className="inline-flex items-center text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/30 px-2 py-1 rounded text-xs ml-2">
        Mobile Friendly
      </span>
    );
  }
  return (
    <span className="inline-flex items-center text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/30 px-2 py-1 rounded text-xs ml-2">
      Not for Mobile
    </span>
  );
};

/**
 * Project detail page component.
 * Displays detailed information about a specific project based on the URL slug.
 * Handles project lookup, demo viewer, and navigation back to projects list.
 *
 * @component
 * @returns {JSX.Element} The project detail page
 */
const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [showDemo, setShowDemo] = useState(false);

  const project: Project | undefined = projectsData.projects.find(
    (p: Project) => p.slug === slug
  );

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Micheal Nestor`;
    } else {
      document.title = "Project Not Found | Micheal Nestor";
    }
  }, [project]);

  /**
   * Handles navigation back to the projects section on the home page.
   * Scrolls to the projects section after navigation completes.
   */
  const handleBackToProjects = () => {
    navigate("/", { replace: true });
    // Use requestAnimationFrame for better timing with React Router
    requestAnimationFrame(() => {
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    });
  };

  if (!project) {
    return (
      <div className="section-container min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-6">
          Sorry, the project you're looking for doesn't exist.
        </p>
        <Button onClick={handleBackToProjects}>Back to Projects</Button>
      </div>
    );
  }

  const formattedDate = formatDate(project.date);

  return (
    <div className="bg-background min-h-screen">
      {showDemo && (
        <DemoViewer
          title={project.title}
          demoUrl={project.demoUrl!}
          onExit={() => setShowDemo(false)}
        />
      )}
      {/* Hero section with project image */}
      <div className="w-full h-[40vh] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4"
          >
            {project.title}
            {project.isRunnable && project.mobileFriendly !== undefined && (
              <MobileIndicator mobileFriendly={project.mobileFriendly} />
            )}
          </motion.h1>
        </div>
      </div>

      {/* Project content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.2 }}
        >
          {/* Project metadata */}
          <Card className="mb-8 enhanced-glass backdrop-blur-lg border border-white/10">
            <CardContent className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center p-6">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-primary" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex flex-wrap gap-4">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </Button>
                {project.isRunnable && project.demoUrl && (
                  <Button
                    variant="default"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => setShowDemo(true)}
                  >
                    <span>Run Project</span>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Project description summary */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-lg text-muted-foreground">
              {project.description}
            </p>
            {project.isRunnable && project.mobileFriendly !== undefined && (
              <div className="mt-2">
                <MobileIndicator mobileFriendly={project.mobileFriendly} />
              </div>
            )}
          </div>

          {/* Project content - can be customized per project */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {project.content
              .split("\n\n")
              .map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-6 border-t border-border flex justify-between">
            <Button variant="outline" onClick={handleBackToProjects}>
              Back to Projects
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
