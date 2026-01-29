import { motion } from "framer-motion";
import personal from "../data/personal.json";
import { icons } from "./ui/icons";
import { fadeInVariants, hoverVariants } from "../lib/animations";

const SquareArrowUpRightIcon = icons.squareArrowUpRight;

/**
 * Hero section component.
 * Displays the main introduction with name, title, location, social links, and CTA.
 * Features sequential fade-in animations for a polished entrance effect.
 *
 * @component
 * @returns {JSX.Element} The hero section
 */
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-6 pt-20"
    >
      <div className="max-w-3xl text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm {personal.name}
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl text-primary font-medium mb-6">
            {personal.title}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.4 }}
          className="mb-8 flex items-center justify-center text-muted-foreground"
        >
          <span>{personal.location}</span>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-6"
        >
          {personal.socials
            .filter((social) => social.icon !== "mail")
            .map((social) => {
              const Icon = icons[social.icon as keyof typeof icons];

              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="glass p-3 rounded-full hover:text-primary transition-all"
                  variants={hoverVariants}
                  initial="rest"
                  whileHover="hover"
                  aria-label={social.name}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </motion.a>
              );
            })}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <a
            href="#about"
            className="glass px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-primary hover:text-white transition-all select-none"
          >
            Learn More <SquareArrowUpRightIcon className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
