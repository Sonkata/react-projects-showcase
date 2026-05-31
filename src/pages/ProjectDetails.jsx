import { Link, useParams } from "react-router";

function ProjectDetails({
    projects,
    savedProjectIds,
    onToggleSaveProject
}) {
    const { projectId } = useParams();

    const project = projects.find((project) => project.id === Number(projectId));

    if (!project) {
        return (
            <section className="page-section text-page not-found-page">
                <p className="error-code">404</p>

                <h1>Project Not Found</h1>

                <p>
                    The project you are looking for does not exist.
                </p>

                <Link to="/projects" className="page-link-btn">
                    Back to Projects
                </Link>
            </section>
        );
    }

    const categoryLabels = {
        "html-css": "HTML / CSS",
        "html-css-js": "HTML / CSS / JavaScript",
        react: "React"
    };

    const isSaved = savedProjectIds.includes(project.id);

    return (
        <section className="page-section project-details-page">
            <Link to="/projects" className="back-link">
                ← Back to Projects
            </Link>

            <div className="project-details-card">
                <div className="project-details-top">
                    <span className="project-category">
                        {categoryLabels[project.category]}
                    </span>

                    <span className="project-status">
                        {project.status}
                    </span>
                </div>

                <h1>{project.title}</h1>

                <p className="project-details-description">
                    {project.longDescription}
                </p>

                <div className="project-details-meta">
                    <div>
                        <strong>{project.year}</strong>
                        <span>Year</span>
                    </div>

                    <div>
                        <strong>{project.technologies.length}</strong>
                        <span>Technologies</span>
                    </div>

                    <div>
                        <strong>{project.featured ? "Yes" : "No"}</strong>
                        <span>Featured</span>
                    </div>
                </div>

                <div className="tech-list details-tech-list">
                    {project.technologies.map((technology) => (
                        <span key={technology} className="tech-badge">
                            {technology}
                        </span>
                    ))}
                </div>

                <div className="project-highlights">
                    <h2>What this project includes</h2>

                    <ul>
                        {project.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                        ))}
                    </ul>
                </div>

                <button
                    type="button"
                    className={isSaved ? "save-project-btn saved" : "save-project-btn"}
                    onClick={() => onToggleSaveProject(project.id)}
                >
                    {isSaved ? "Saved" : "Save Project"}
                </button>

                <div className="project-links details-links">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Live Demo
                    </a>

                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ProjectDetails;