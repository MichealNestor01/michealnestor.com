import { useEffect } from "react";
import { toggleSiteTheme } from "./functions/toggleSiteTheme";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import NavBar from "./components/NavBar/NavBar";

let initial: boolean = true;

function App() {
  useEffect(() => {
    if (initial) {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      toggleSiteTheme(prefersDarkMode ? "dark" : "light");
    }
    initial = false;
  }, []);

  return (
    <div id="site-wrapper" className="w-screen h-screen">
      <section className="container mx-auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
