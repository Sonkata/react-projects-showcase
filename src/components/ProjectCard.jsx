import { Link } from "react-router";

function ProjectCard({
    id,
    title,
    category,
    description,
    technologies,
    liveUrl,
    githubUrl,
    isSaved,
    onToggleSave
}) {
    const categoryLabels = {
        "html-css": "HTML / CSS",
        "html-css-js": "HTML / CSS / JavaScript",
        react: "React"
    };

    return (
        <article className="project-card">
            <div className="project-card-top">
                <span className="project-category">
                    {categoryLabels[category]}
                </span>

                <span className="project-status">
                    Live Project
                </span>
            </div>

            <div className="project-card-content">
                <h2>{title}</h2>

                <p>{description}</p>
            </div>

            <div className="tech-list">
                {technologies.map((technology) => (
                    <span key={technology} className="tech-badge">
                        {technology}
                    </span>
                ))}
            </div>

            <button
                type="button"
                className={isSaved ? "save-project-btn saved" : "save-project-btn"}
                onClick={() => onToggleSave(id)}
            >
                {isSaved ? "Saved" : "Save Project"}
            </button>

            <div className="project-links">
                <Link to={`/projects/${id}`}>
                    Details
                </Link>

                <a href={liveUrl} target="_blank" rel="noreferrer">
                    Live Demo
                </a>

                <a href={githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                </a>
            </div>
        </article>
    );
}

export default ProjectCard;