import { Link, useLocation } from "react-router-dom";
import "./NavItem.css";

type NavBarItemProps = {
  title: string;
  path: string;
};

const NavBarItem: React.FC<NavBarItemProps> = ({ title, path }) => {
  const location = useLocation();

  return (
    <Link
      className={`link text-xl mx-4 ${
        location.pathname === path ? "active" : "inactive hover-transition"
      }`}
      to={path}
    >
      {title}
    </Link>
  );
};

export default NavBarItem;
