import type { IconName } from "@/components/ui/icons";

// Only use approved icons. Else, fallback to an emoji.
type SkillIconEntry = { icon: IconName; color?: string } | { emoji: string };

export const skillIcons: Record<string, SkillIconEntry> = {
  // --- PROGRAMMING LANGUAGES ---
  Python: { icon: "python", color: "#3776AB" },
  TypeScript: { icon: "js", color: "#3178C6" },
  Java: { icon: "java", color: "#ED8B00" },
  "C++": { icon: "code", color: "#00599C" },
  C: { icon: "code", color: "#A8B9CC" },

  // --- FRAMEWORKS & LIBRARIES ---
  "React.js": { icon: "react", color: "#61DAFB" },
  Redux: { icon: "layers", color: "#764ABC" },
  OpenGL: { icon: "cube", color: "#5586A4" },
  Flask: { icon: "flask", color: "#000000" },
  ELK: { icon: "search", color: "#FED02E" },
  FastMCP: { icon: "brain", color: "#9333EA" },

  // --- TOOLS & PLATFORMS ---
  Git: { icon: "git", color: "#F05032" },
  Linux: { icon: "linux", color: "#FCC624" },
  Azure: { icon: "cloud", color: "#008AD7" },
  "Agentic Workflows": { icon: "robot", color: "#00A8E8" },

  // --- SOFT SKILLS ---
  Communication: { icon: "comments", color: "#4A90E2" },
  Teamwork: { icon: "users", color: "#2ECC71" },
  "Project Management": { icon: "projectDiagram", color: "#9B59B6" },
  "Problem Solving": { icon: "lightbulb", color: "#F39C12" },
  "Working in complex code bases": { icon: "fileCode", color: "#3498DB" },
  Negotiating: { icon: "handshake", color: "#16A085" },
  "Conflict Resolution": { icon: "handshake", color: "#E91E63" },

  // --- HOBBIES / OTHER ---
  "Bouldering & Top-Rope": { emoji: "🧗" },
  Badminton: { emoji: "🏸" },
  Running: { emoji: "🏃" },
  Swimming: { icon: "swimmer", color: "#00BCD4" },
  Weights: { icon: "dumbbell", color: "#FF5722" },
  Hiking: { icon: "mountain", color: "#795548" },
  "Languages (Learning Russian)": { emoji: "🗣️" },
  "Technical Development": { icon: "gears", color: "#607D8B" },
  Volunteering: { icon: "handshake", color: "#E91E63" },
  "Financial Risk Research": { icon: "chartLine", color: "#E74C3C" },
};
