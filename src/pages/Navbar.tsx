import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">Harsha</h1>
            <ul className="nav-links">
                <li><Link to="src/pages/Projects.tsx">Projects</Link></li>
                <li><Link to="src/pages/About.tsx">About</Link></li>
                <li><Link to="src/pages/Contact.tsx">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
