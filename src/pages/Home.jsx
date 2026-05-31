import { Link } from "react-router";
import Hero from "../components/Hero";

function Home({ totalProjects }) {
    return (
        <>
            <Hero totalProjects={totalProjects} />

            <div className="home-actions">
                <Link to="/projects" className="page-link-btn">
                    View Projects
                </Link>

                <Link to="/about" className="secondary-link-btn">
                    About Me
                </Link>
            </div>
        </>
    );
}

export default Home;