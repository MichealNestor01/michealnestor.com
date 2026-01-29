import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsDarkMode, toggleTheme } from "../redux/themeSlice";

/**
 * Custom hook for managing theme state and toggling between light/dark modes.
 * Syncs theme with Redux store and applies dark class to document root.
 *
 * @returns {Object} Theme state and toggle function
 * @returns {boolean} returns.isDarkMode - Current theme state (true for dark mode)
 * @returns {Function} returns.toggle - Function to toggle between light and dark themes
 *
 * @example
 * ```tsx
 * const { isDarkMode, toggle } = useTheme();
 *
 * return (
 *   <button onClick={toggle}>
 *     {isDarkMode ? "Switch to Light" : "Switch to Dark"}
 *   </button>
 * );
 * ```
 */
export const useTheme = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  /**
   * Toggles the theme between light and dark modes.
   */
  const toggle = () => {
    dispatch(toggleTheme());
  };

  return { isDarkMode, toggle };
};
