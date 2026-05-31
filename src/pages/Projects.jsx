import SearchBox from "../components/SearchBox";
import FilterButtons from "../components/FilterButtons";
import ProjectList from "../components/ProjectList";

function Projects({
    searchTerm,
    onSearchChange,
    onClearSearch,
    selectedCategory,
    onCategoryChange,
    filteredProjects,
    totalProjects,
    savedProjectIds,
    savedProjectsCount,
    onToggleSaveProject,
    onClearSavedProjects
}) {
    return (
        <section className="page-section">
            <h1>Projects</h1>

            <p className="page-description">
                Browse my completed front-end projects. Use the search and filters
                to find projects by technology, category or saved status.
            </p>

            <SearchBox
                searchTerm={searchTerm}
                onSearchChange={onSearchChange}
                onClearSearch={onClearSearch}
            />

            <FilterButtons
                selectedCategory={selectedCategory}
                onCategoryChange={onCategoryChange}
                savedProjectsCount={savedProjectsCount}
            />

            <div className="projects-meta">
                <p className="results-count">
                    Showing {filteredProjects.length} of {totalProjects} projects
                </p>

                <p className="saved-count">
                    Saved projects: {savedProjectsCount}
                </p>
            </div>

            {savedProjectsCount > 0 && (
                <button
                    type="button"
                    className="clear-saved-btn"
                    onClick={onClearSavedProjects}
                >
                    Clear Saved Projects
                </button>
            )}

            <ProjectList
                projects={filteredProjects}
                savedProjectIds={savedProjectIds}
                onToggleSaveProject={onToggleSaveProject}
            />
        </section>
    );
}

export default Projects;