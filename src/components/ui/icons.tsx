import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faBrain,
  faCalendar,
  faChartLine,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faCloud,
  faCode,
  faComments,
  faCube,
  faDatabase,
  faDownload,
  faDumbbell,
  faEllipsis,
  faEnvelope,
  faFileCode,
  faFlask,
  faGears,
  faHandshake,
  faLayerGroup,
  faLightbulb,
  faMoon,
  faMountain,
  faProjectDiagram,
  faRobot,
  faSearch,
  faSquareArrowUpRight,
  faSun,
  faSwimmer,
  faTerminal,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGitAlt,
  faJava,
  faJs,
  faLinkedin,
  faLinux,
  faPython,
  faReact,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

/**
 * Icon component props (excluding the icon prop itself).
 *
 * @typedef {Omit<FontAwesomeIconProps, "icon">} IconProps
 */
type IconProps = Omit<FontAwesomeIconProps, "icon">;

/**
 * Icon component type.
 *
 * @typedef {(props: IconProps) => JSX.Element} IconComponent
 */
type IconComponent = (props: IconProps) => JSX.Element;

/**
 * Creates a reusable icon component from a FontAwesome icon definition.
 *
 * @param {IconDefinition} icon - FontAwesome icon definition
 * @returns {IconComponent} React component that renders the icon
 */
const createIcon = (icon: IconDefinition): IconComponent => {
  const Icon = (props: IconProps) => <FontAwesomeIcon icon={icon} {...props} />;
  return Icon;
};

/**
 * Centralized icon library.
 * Provides consistent icon components throughout the application.
 * All icons are FontAwesome icons wrapped in reusable components.
 *
 * @constant
 * @type {Record<string, IconComponent>}
 */
export const icons = {
  github: createIcon(faGithub),
  githubSquare: createIcon(faSquareGithub),
  linkedin: createIcon(faLinkedin),
  mail: createIcon(faEnvelope),
  download: createIcon(faDownload),
  calendar: createIcon(faCalendar),
  chevronDown: createIcon(faChevronDown),
  chevronLeft: createIcon(faChevronLeft),
  chevronRight: createIcon(faChevronRight),
  squareArrowUpRight: createIcon(faSquareArrowUpRight),
  ellipsis: createIcon(faEllipsis),
  moon: createIcon(faMoon),
  sun: createIcon(faSun),
  bolt: createIcon(faBolt),
  layers: createIcon(faLayerGroup),
  cloud: createIcon(faCloud),
  terminal: createIcon(faTerminal),
  database: createIcon(faDatabase),
  // Programming languages
  python: createIcon(faPython),
  js: createIcon(faJs),
  java: createIcon(faJava),
  code: createIcon(faCode),
  // Frameworks & Libraries
  react: createIcon(faReact),
  flask: createIcon(faFlask),
  // Tools & Platforms
  git: createIcon(faGitAlt),
  linux: createIcon(faLinux),
  // Soft skills
  users: createIcon(faUsers),
  comments: createIcon(faComments),
  projectDiagram: createIcon(faProjectDiagram),
  lightbulb: createIcon(faLightbulb),
  handshake: createIcon(faHandshake),
  fileCode: createIcon(faFileCode),
  // Hobbies & Activities
  dumbbell: createIcon(faDumbbell),
  mountain: createIcon(faMountain),
  swimmer: createIcon(faSwimmer),
  gears: createIcon(faGears),
  // Other
  chartLine: createIcon(faChartLine),
  search: createIcon(faSearch),
  cube: createIcon(faCube),
  robot: createIcon(faRobot),
  brain: createIcon(faBrain),
};

/**
 * Type representing all available icon names.
 *
 * @typedef {keyof typeof icons} IconName
 */
export type IconName = keyof typeof icons;
