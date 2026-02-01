import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeSync } from "@/components/ThemeSync";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";

/**
 * Main application component.
 * Sets up Redux, theme sync, routing, tooltip provider, and defines all application routes.
 *
 * @component
 * @returns {JSX.Element} The root application component
 */
const App = () => (
  <Provider store={store}>
    <ThemeSync>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeSync>
  </Provider>
);

export default App;
