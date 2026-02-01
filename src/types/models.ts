/**
 * Type definitions for the portfolio application.
 * @module models
 */

/**
 * Represents a portfolio project.
 *
 * @interface Project
 */
export interface Project {
  /** Project title */
  title: string;
  /** URL-friendly slug identifier */
  slug: string;
  /** Short project description */
  description: string;
  /** List of technologies used in the project */
  technologies: string[];
  /** GitHub repository URL */
  githubUrl: string;
  /** Path to project image */
  image: string;
  /** Project completion date (ISO format) */
  date: string;
  /** Detailed project content/description */
  content: string;
  /** Whether the project has a runnable demo */
  isRunnable?: boolean;
  /** URL to the project demo */
  demoUrl?: string;
  /** Whether the project is mobile-friendly */
  mobileFriendly?: boolean;
  /** Project filter tags (e.g. "Web app", "University coursework") */
  tags?: string[];
}

/**
 * Represents a work experience entry.
 *
 * @interface Experience
 */
export interface Experience {
  /** Company name */
  company: string;
  /** Job position/title */
  position: string;
  /** Work location */
  location: string;
  /** Employment duration */
  duration: string;
  /** Job description */
  description: string;
  /** List of key achievements */
  achievements: string[];
  /** List of skills/technologies used */
  skills: string[];
}

/**
 * Represents an education entry.
 *
 * @interface Education
 */
export interface Education {
  /** Educational institution name */
  institution: string;
  /** Degree or qualification obtained */
  degree: string;
  /** Duration of education */
  duration: string;
  /** Optional list of description points */
  description?: string[];
  /** Optional grades/GPA information */
  grades?: string;
}

/**
 * Represents a certification entry.
 *
 * @interface Certification
 */
export interface Certification {
  /** Certification name */
  name: string;
  /** Issuing organization */
  issuer: string;
}

/**
 * Represents a category of skills.
 *
 * @interface SkillsCategory
 */
export interface SkillsCategory {
  /** Category name (e.g., "Languages", "Frameworks") */
  name: string;
  /** List of skills in this category */
  skills: string[];
}

/**
 * Complete skills data structure.
 *
 * @interface SkillsData
 */
export interface SkillsData {
  /** Categorized skill groups */
  categories: SkillsCategory[];
  /** List of hobbies/interests */
  hobbies: string[];
}

/**
 * Personal information and social links.
 *
 * @interface Personal
 */
export interface Personal {
  /** Full name */
  name: string;
  /** Professional title */
  title: string;
  /** Current location */
  location: string;
  /** Email address */
  email: string;
  /** LinkedIn profile identifier */
  linkedIn: string;
  /** Array of social media links */
  socials: {
    /** Social platform name */
    name: string;
    /** Profile URL */
    url: string;
    /** Icon identifier */
    icon: string;
  }[];
  /** About me description */
  about: string;
}
