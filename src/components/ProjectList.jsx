import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
    if (projects.length === 0) {
        return (
            <div className="empty-state">
                <h2>No projects found.</h2>
                <p>Try another search term or category.</p>
            </div>
        );
    }

    return (
        <section className="projects-grid">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    technologies={project.technologies}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                />
            ))}
        </section>
    );
}

export default ProjectList;