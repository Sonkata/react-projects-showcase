function FilterButtons({ selectedCategory, onCategoryChange }) {
    return (
        <div className="project-filters">
            <button
                className={selectedCategory === "all" ? "project-filter active-project-filter" : "project-filter"}
                onClick={() => onCategoryChange("all")}
            >
                All
            </button>

            <button
                className={selectedCategory === "html-css" ? "project-filter active-project-filter" : "project-filter"}
                onClick={() => onCategoryChange("html-css")}
            >
                HTML/CSS
            </button>

            <button
                className={selectedCategory === "html-css-js" ? "project-filter active-project-filter" : "project-filter"}
                onClick={() => onCategoryChange("html-css-js")}
            >
                JavaScript
            </button>

            <button
                className={selectedCategory === "react" ? "project-filter active-project-filter" : "project-filter"}
                onClick={() => onCategoryChange("react")}
            >
                React
            </button>
        </div>
    );
}

export default FilterButtons;