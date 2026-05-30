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
    totalProjects
}) {
    return (
        <section className="page-section">
            <h1>Projects</h1>

            <p className="page-description">
                Browse my completed front-end projects. Use the search and filters
                to find projects by technology or category.
            </p>

            <SearchBox
                searchTerm={searchTerm}
                onSearchChange={onSearchChange}
                onClearSearch={onClearSearch}
            />

            <FilterButtons
                selectedCategory={selectedCategory}
                onCategoryChange={onCategoryChange}
            />

            <p className="results-count">
                Showing {filteredProjects.length} of {totalProjects} projects
            </p>

            <ProjectList projects={filteredProjects} />
        </section>
    );
}

export default Projects;