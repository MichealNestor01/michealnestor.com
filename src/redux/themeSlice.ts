import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

/**
 * Theme state interface.
 *
 * @interface ThemeState
 */
interface ThemeState {
  /** Whether dark mode is currently enabled */
  isDarkMode: boolean;
}

/**
 * Determines the initial theme preference.
 * Checks localStorage first, then falls back to system preference.
 * Returns false (light mode) if running server-side.
 *
 * @returns {boolean} Initial dark mode state
 */
const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    return savedTheme === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const initialState: ThemeState = {
  isDarkMode: getInitialTheme(),
};

/**
 * Redux slice for managing theme state.
 * Handles theme toggling and persistence to localStorage.
 */
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    /**
     * Toggles between light and dark themes.
     * Persists the new theme preference to localStorage.
     *
     * @param {ThemeState} state - Current theme state
     */
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("theme", state.isDarkMode ? "dark" : "light");
    },
    /**
     * Sets theme to dark mode.
     * Persists preference to localStorage.
     *
     * @param {ThemeState} state - Current theme state
     */
    setDarkMode: (state) => {
      state.isDarkMode = true;
      localStorage.setItem("theme", "dark");
    },
    /**
     * Sets theme to light mode.
     * Persists preference to localStorage.
     *
     * @param {ThemeState} state - Current theme state
     */
    setLightMode: (state) => {
      state.isDarkMode = false;
      localStorage.setItem("theme", "light");
    },
  },
});

export const { toggleTheme, setDarkMode, setLightMode } = themeSlice.actions;

/**
 * Selector to get the current dark mode state.
 *
 * @param {RootState} state - Complete Redux state
 * @returns {boolean} Current dark mode state
 */
export const selectIsDarkMode = (state: RootState) => state.theme.isDarkMode;

export default themeSlice.reducer;
