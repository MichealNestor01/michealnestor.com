import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const AnimatedBackground = () => {
  // Get scroll progress for parallax effect
  const { scrollYProgress } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  // Transform scroll progress into more dramatic movement rates for each blob
  const yPrimaryBlob = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yAccentBlob = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const ySecondaryBlob = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const yDestructiveBlob = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Primary light blob */}
      <motion.div
        className="absolute top-[10%] left-[20%] w-96 h-96 rounded-full bg-primary/30 blur-3xl"
        style={{ y: yPrimaryBlob }}
        animate={{
          x: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Accent light blob */}
      <motion.div
        className="absolute bottom-[20%] right-[15%] w-[30rem] h-[30rem] rounded-full bg-accent/30 blur-3xl"
        style={{ y: yAccentBlob }}
        animate={{
          x: [0, -60, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Secondary light blob */}
      <motion.div
        className="absolute top-[40%] left-[60%] w-80 h-80 rounded-full bg-secondary/40 blur-3xl"
        style={{ y: ySecondaryBlob }}
        animate={{
          x: [0, 30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Subtle light blob in a different color */}
      <motion.div
        className="absolute top-[70%] left-[30%] w-72 h-72 rounded-full bg-destructive/20 blur-3xl"
        style={{ y: yDestructiveBlob }}
        animate={{
          x: [0, -40, 0],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />

      {/* Additional background blobs for more visual interest */}
      <motion.div
        className="absolute top-[25%] right-[25%] w-64 h-64 rounded-full bg-primary/15 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -350]) }}
        animate={{
          x: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7,
        }}
      />

      <motion.div
        className="absolute bottom-[35%] left-[15%] w-80 h-80 rounded-full bg-accent/20 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -280]) }}
        animate={{
          x: [0, 40, 0],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
};
