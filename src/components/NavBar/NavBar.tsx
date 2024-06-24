import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Socials from "../Socials/Socials";
import ToggleButton from "../ToggleButton/ToggleButton";
import NavBarItem from "./NavBarItem";
import { IconSunHigh, IconMoonStars } from "@tabler/icons-react/";
import { toggleSiteTheme } from "../../functions/toggleSiteTheme";
import { getSiteTheme } from "../../functions/getSiteTheme";

export default function NavBar() {
  const navigate = useNavigate();
  const [siteThemeIsLight, setSiteThemeIsLight] = useState<boolean>(
    getSiteTheme() === "light"
  );

  function lightModeToggleButton() {
    setSiteThemeIsLight(!siteThemeIsLight);
    toggleSiteTheme();
  }

  return (
    <nav className="text-primary-colour flex items-center justify-between h-16 py-10">
      <h1
        className="text-3xl font-bold cursor-pointer w-64"
        onClick={() => navigate("/")}
      >
        Micheal Nestor
      </h1>
      <section className="w-64 flex items-center justify-center">
        <NavBarItem title="home" path="/" />
        <NavBarItem title="portfolio" path="/portfolio/" />
        <NavBarItem title="about" path="/about/" />
      </section>
      <div className="w-64 flex items-center justify-end ">
        <Socials className="mr-16" size={32} />
        <ToggleButton
          className="hover-transition"
          optionAactive={siteThemeIsLight}
          onClick={lightModeToggleButton}
          optionA={<IconMoonStars size={32} />}
          optionB={<IconSunHigh size={32} />}
        />
      </div>
    </nav>
  );
}
