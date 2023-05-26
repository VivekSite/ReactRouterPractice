import { Link, useMatch } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  const isActive = useMatch(to);

  return (
    <Link
      className="NavLink"
      to={to}
      style={{
        textDecoration: isActive ? "underline" : "none",
        color: isActive ? "white" : "aquamarine",
      }}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
