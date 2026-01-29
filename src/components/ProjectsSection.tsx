import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";
import { icons } from "./ui/icons";
import {
  fadeInUpProps,
  staggerContainerVariants,
  staggerItemVariants,
  viewportConfig,
} from "../lib/animations";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SectionTitle } from "./ui/sectionTitle";

const GithubIcon = icons.github;
const MOBILE_BREAKPOINT = 768;
const PROJECTS_PER_PAGE_DESKTOP = 6;
const PROJECTS_PER_PAGE_MOBILE = 3;
const MAX_VISIBLE_PAGES = 5;

/**
 * Projects section component.
 * Displays a filterable, paginated grid of portfolio projects.
 * Supports technology filtering and responsive pagination.
 *
 * @component
 * @returns {JSX.Element} The projects section
 */
export const ProjectsSection = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Lock animation state once triggered
  if (isInView && !hasAnimatedRef.current) {
    hasAnimatedRef.current = true;
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projectsPerPage = isMobile
    ? PROJECTS_PER_PAGE_MOBILE
    : PROJECTS_PER_PAGE_DESKTOP;

  const allTechnologies = useMemo(
    () =>
      Array.from(
        new Set(
          projectsData.projects.flatMap((project) => project.technologies),
        ),
      ),
    [],
  );

  const filteredProjects = useMemo(
    () =>
      filter
        ? projectsData.projects.filter((project) =>
            project.technologies.includes(filter),
          )
        : projectsData.projects,
    [filter],
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const handleFilterChange = (newFilter: string | null) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [isMobile]);

  /**
   * Handles page change and scrolls to projects section.
   *
   * @param {number} page - Page number to navigate to
   */
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    requestAnimationFrame(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  /**
   * Generates page numbers for pagination with ellipsis for large page counts.
   *
   * @returns {(number | string)[]} Array of page numbers and ellipsis markers
   */
  const getPageNumbers = (): (number | string)[] => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <section
      id="projects"
      className="section-container bg-secondary/30 relative overflow-hidden"
    >
      <SectionTitle title="Projects" />

      <div className="mb-8 relative z-10">
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => handleFilterChange(null)}
            className={`px-4 py-1 rounded-full text-sm backdrop-blur-md transition-all ${
              filter === null
                ? "bg-primary text-white shadow-md"
                : "enhanced-glass border border-white/10"
            }`}
          >
            All
          </button>

          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => handleFilterChange(tech)}
              className={`px-4 py-1 rounded-full text-sm backdrop-blur-md transition-all ${
                filter === tech
                  ? "bg-primary text-white shadow-md"
                  : "enhanced-glass border border-white/10"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-8"
      >
        {currentProjects.map((project, index: number) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0 }}
            animate={hasAnimatedRef.current ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{
              y: -4,
              transition: { duration: 0.2 },
            }}
          >
            <div className="enhanced-glass overflow-hidden rounded-lg h-full flex flex-col backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link
                to={`/projects/${project.slug}`}
                className="block flex-grow"
              >
                {project.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-700"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={`${project.title}-${tech}`}
                        className="px-2 py-1 bg-secondary/50 dark:bg-secondary/30 backdrop-blur-sm rounded text-xs border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
              <div className="px-6 pb-6">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm hover:text-primary transition-colors group"
                >
                  <GithubIcon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="relative z-10">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    currentPage > 1 && handlePageChange(currentPage - 1)
                  }
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {getPageNumbers().map((page, index) => (
                <PaginationItem key={index}>
                  {page === "ellipsis" ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      onClick={() => handlePageChange(page as number)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    currentPage < totalPages &&
                    handlePageChange(currentPage + 1)
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </section>
  );
};
