import azureLogo from "../../assets/skillsLogos/AzureLogo.png";
import cppLogo from "../../assets/skillsLogos/CppLogo.png";
import dockerLogo from "../../assets/skillsLogos/DockerLogo.png";
import flaskLogo from "../../assets/skillsLogos/FlaskLogo.png";
import javaLogo from "../../assets/skillsLogos/JavaLogo.png";
import jsLogo from "../../assets/skillsLogos/JsLogo.png";
import linuxLogo from "../../assets/skillsLogos/LinuxLogo.png";
import numpyLogo from "../../assets/skillsLogos/NumpyLogo.png";
import openGlLogo from "../../assets/skillsLogos/OpenGlLogo.png";
import pythonLogo from "../../assets/skillsLogos/PythonLogo.png";
import reactLogo from "../../assets/skillsLogos/ReactLogo.png";
import sqlLogo from "../../assets/skillsLogos/SqlLogo.png";
import tailwindLogo from "../../assets/skillsLogos/TailwindLogo.png";
import tsLogo from "../../assets/skillsLogos/TsLogo.png";
import sassLog from "../../assets/skillsLogos/SassLogo.png";
import "./spinner.css";

const skillsLogos = [
  azureLogo,
  dockerLogo,
  linuxLogo,
  flaskLogo,
  numpyLogo,
  pythonLogo,
  cppLogo,
  openGlLogo,
  javaLogo,
  tsLogo,
  jsLogo,
  reactLogo,
  tailwindLogo,
  sassLog,
  sqlLogo,
];

export default function SkillsSpinner() {
  const logoItemsDiv = skillsLogos.map((logo) => (
    <img className="h-16" src={logo} />
  ));
  return (
    <div className="relative mt-4 w-full overflow-hidden">
      <div className="absoulte flex top-0 left-0 h-16 spinner">
        <div className="flex items-center justify-evenly gap-4 h-full w-1/2">
          {logoItemsDiv}
        </div>
        <div className="flex items-center justify-evenly gap-4 h-full w-1/2">
          {logoItemsDiv}
        </div>
      </div>
    </div>
  );
}
