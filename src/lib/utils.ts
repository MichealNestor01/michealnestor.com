import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution.
 * Combines clsx for conditional classes and tailwind-merge to handle Tailwind class conflicts.
 *
 * @param {...ClassValue[]} inputs - Variable number of class values (strings, objects, arrays)
 * @returns {string} Merged and deduplicated class string
 *
 * @example
 * ```tsx
 * cn("px-2 py-1", "px-4") // Returns "py-1 px-4" (px-2 is overridden by px-4)
 * cn("bg-red-500", { "bg-blue-500": true }) // Returns "bg-blue-500"
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
