import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

/**
 * Application entry point.
 * Initializes React root and renders the main App component.
 */
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Ensure there is a div with id='root' in your HTML.");
}

createRoot(rootElement).render(<App />);
