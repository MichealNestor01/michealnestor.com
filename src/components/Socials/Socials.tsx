import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";

const socials = [
  {
    icon: IconBrandLinkedin,
    link: "https://www.linkedin.com/in/michealnestor",
  },
  {
    icon: IconBrandGithub,
    link: "https://github.com/MichealNestor01",
  },
  { icon: IconMail, link: "mailto:michealnestor@outlook.com" },
];

type SocialsProps = {
  className: string;
  size: number;
  stroke: number;
};

const Socials: React.FC<SocialsProps> = ({ className, size, stroke }) => {
  const classes = `${className} flex items-center justify-between w-40`;
  return (
    <div className={classes}>
      {socials.map((social, index) => (
        <a
          key={"social" + index}
          className="cursor-pointer hover-transition"
          target="_blank"
          rel="noreferrer"
          href={social.link}
        >
          <social.icon size={size} stroke={stroke} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
