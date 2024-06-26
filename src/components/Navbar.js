import "../Styles/styles.css";
import RKSLogo from "../Images/RKSLogo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src={RKSLogo} alt="RKS Logo" className="navbar-logo" />
        <ul className="navbar-nav">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/services">Services</CustomLink>
          <CustomLink to="/about">About us</CustomLink>
          <CustomLink to="/contact">Contact us</CustomLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  console.log(resolvedPath.pathname);
  console.log("isactive: ", isActive);

  if (isActive) {
    console.log("Active link: ", resolvedPath.pathname);
  }
  return (
    <li>
      <Link to={to} className={isActive ? "active" : ""} {...props}>
        {children}
      </Link>
    </li>
  );
}
