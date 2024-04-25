import "../Styles/styles.css";
import RKSLogo from "../Images/RKSLogo.png";

function Navbar() {
    return (
        <div>
            
            <nav className="navbar">
               
                <img src={RKSLogo} alt="RKS Logo" className="navbar-logo" />
                <ul className="navbar-nav">
                    <li>
                        <a href="/" className="nav-link">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link">
                            About us
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link">
                            Contact us
                        </a>
                    </li>

                </ul>

            
            </nav>
        </div>
    )
}

export default Navbar;
