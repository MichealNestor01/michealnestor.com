/**
 * Project filter categories.
 * Tag each project with one or more of these in projects.json.
 */

export const PROJECT_CATEGORIES = [
  "Web Apps",
  "Command Line Tools",
  "University Coursework",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
