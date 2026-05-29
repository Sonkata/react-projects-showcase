import { useState } from "react";
import "./App.css";

import { projects } from "./data/projects";
import Hero from "./components/Hero";
import FilterButtons from "./components/FilterButtons";
import ProjectList from "./components/ProjectList";
import SearchBox from "./components/SearchBox";

function App() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    function handleCategoryChange(category) {
        setSelectedCategory(category);
    }

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
    }

    function handleClearSearch() {
        setSearchTerm("");
    }

    const filteredProjects = projects.filter((project) => {
        const matchesCategory =
            selectedCategory === "all" || project.category === selectedCategory;

        const searchText = searchTerm.toLowerCase();

        const matchesSearch =
            project.title.toLowerCase().includes(searchText) ||
            project.description.toLowerCase().includes(searchText) ||
            project.technologies.join(" ").toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });

    return (
        <main className="app">
            <Hero totalProjects={projects.length} />

            <SearchBox
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                onClearSearch={handleClearSearch}
            />

            <FilterButtons
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
            />

            <p className="results-count">
                Showing {filteredProjects.length} of {projects.length} projects
            </p>

            <ProjectList projects={filteredProjects} />
        </main>
    );
}

export default App;