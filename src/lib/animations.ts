import { Variants } from "framer-motion";

/**
 * Centralized animation configuration for the application.
 * All animations should be imported from this file to ensure consistency.
 *
 * @module animations
 * @description Provides reusable animation variants and configurations for Framer Motion
 */

/**
 * Standard animation durations in seconds.
 * @constant
 * @type {Readonly<{fast: number, normal: number}>}
 */
const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.4,
} as const;

/**
 * Simple fade-in animation variant.
 * Fades element from transparent to opaque without movement.
 *
 * @constant
 * @type {Variants}
 */
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: "easeOut",
    },
  },
};

/**
 * Hover animation variant with subtle lift effect.
 * Lifts element up 4px and slightly scales on hover.
 *
 * @constant
 * @type {Variants}
 */
export const hoverVariants: Variants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -4,
    scale: 1.01,
    transition: {
      duration: ANIMATION_DURATION.fast,
      ease: "easeOut",
    },
  },
};

/**
 * Viewport configuration for scroll-triggered animations.
 * Uses larger negative margin to trigger animations earlier and prevent flickering.
 * Animations trigger once when element is 10% visible.
 *
 * @constant
 * @type {Readonly<{once: boolean, margin: string, amount: number}>}
 */
export const viewportConfig = {
  once: true,
  margin: "-100px",
  amount: 0.1,
} as const;

/**
 * Stagger container animation variant.
 * Used as a parent container to stagger children animations sequentially.
 * Note: Container itself doesn't animate opacity to prevent flickering when children change.
 *
 * @constant
 * @type {Variants}
 */
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Stagger child item animation variant.
 * Used for individual items within a stagger container.
 * Simple fade-in only, no movement.
 *
 * @constant
 * @type {Variants}
 */
export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: "easeOut",
    },
  },
};

/**
 * Pre-configured simple fade-in props for motion components.
 * Ready to use with scroll-triggered animations.
 *
 * @constant
 * @type {Readonly<{initial: string, whileInView: string, viewport: typeof viewportConfig, variants: Variants}>}
 */
export const fadeInUpProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: viewportConfig,
  variants: fadeInVariants,
} as const;
