function FilterButtons({
    selectedCategory,
    onCategoryChange,
    savedProjectsCount
}) {
    return (
        <div className="project-filters">
            <button
                className={
                    selectedCategory === "all"
                        ? "project-filter active-project-filter"
                        : "project-filter"
                }
                onClick={() => onCategoryChange("all")}
            >
                All
            </button>

            <button
                className={
                    selectedCategory === "html-css"
                        ? "project-filter active-project-filter"
                        : "project-filter"
                }
                onClick={() => onCategoryChange("html-css")}
            >
                HTML/CSS
            </button>

            <button
                className={
                    selectedCategory === "html-css-js"
                        ? "project-filter active-project-filter"
                        : "project-filter"
                }
                onClick={() => onCategoryChange("html-css-js")}
            >
                JavaScript
            </button>

            <button
                className={
                    selectedCategory === "react"
                        ? "project-filter active-project-filter"
                        : "project-filter"
                }
                onClick={() => onCategoryChange("react")}
            >
                React
            </button>

            <button
                className={
                    selectedCategory === "saved"
                        ? "project-filter active-project-filter saved-filter"
                        : "project-filter saved-filter"
                }
                onClick={() => onCategoryChange("saved")}
            >
                Saved ({savedProjectsCount})
            </button>
        </div>
    );
}

export default FilterButtons;