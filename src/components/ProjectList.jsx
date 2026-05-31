import ProjectCard from "./ProjectCard";

function ProjectList({ projects, savedProjectIds, onToggleSaveProject }) {
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
                    id={project.id}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    technologies={project.technologies}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    isSaved={savedProjectIds.includes(project.id)}
                    onToggleSave={onToggleSaveProject}
                />
            ))}
        </section>
    );
}

export default ProjectList;