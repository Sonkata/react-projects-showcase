import { Link } from "react-router";

function NotFound() {
    return (
        <section className="page-section text-page not-found-page">
            <p className="error-code">404</p>

            <h1>Page Not Found</h1>

            <p>
                The page you are looking for does not exist or has been moved.
            </p>

            <Link to="/" className="page-link-btn">
                Back to Home
            </Link>
        </section>
    );
}

export default NotFound;