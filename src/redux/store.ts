import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

/**
 * Redux store configuration for the application.
 * Currently manages theme state.
 *
 * @constant
 */
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

/**
 * Type representing the complete Redux state tree.
 * @typedef {ReturnType<typeof store.getState>} RootState
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Type representing the Redux dispatch function.
 * @typedef {typeof store.dispatch} AppDispatch
 */
export type AppDispatch = typeof store.dispatch;
