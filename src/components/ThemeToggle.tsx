import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { icons } from "@/components/ui/icons";

// <i class="fa-solid fa-moon"></i>
// <i class="fa-solid fa-sun"></i>

const MoonIcon = icons.moon;
const SunIcon = icons.sun;

export const ThemeToggle = () => {
  const { isDarkMode, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full glass hover:bg-background/80"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isDarkMode ? (
          <MoonIcon className="h-5 w-5 text-yellow-300" />
        ) : (
          <SunIcon className="h-5 w-5 text-yellow-500" />
        )}
      </motion.div>
    </button>
  );
};
