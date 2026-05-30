import { NavLink } from "react-router";

function Navbar() {
    function getNavLinkClass({ isActive }) {
        return isActive ? "nav-link active" : "nav-link";
    }

    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-logo">
                Soner.dev
            </NavLink>

            <div className="nav-links">
                <NavLink to="/" end className={getNavLinkClass}>
                    Home
                </NavLink>

                <NavLink to="/projects" className={getNavLinkClass}>
                    Projects
                </NavLink>

                <NavLink to="/about" className={getNavLinkClass}>
                    About
                </NavLink>

                <NavLink to="/contact" className={getNavLinkClass}>
                    Contact
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;