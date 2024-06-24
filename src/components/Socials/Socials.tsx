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
};

const Socials: React.FC<SocialsProps> = ({ className, size }) => {
  const classes = `${className} flex items-center justify-between w-36`;
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
          <social.icon size={size} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
