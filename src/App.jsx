import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";

import { projects } from "./data/projects";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

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
        <Routes>
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={<Home totalProjects={projects.length} />}
                />

                <Route
                    path="/projects"
                    element={
                        <Projects
                            searchTerm={searchTerm}
                            onSearchChange={handleSearchChange}
                            onClearSearch={handleClearSearch}
                            selectedCategory={selectedCategory}
                            onCategoryChange={handleCategoryChange}
                            filteredProjects={filteredProjects}
                            totalProjects={projects.length}
                        />
                    }
                />

                <Route path="/about" element={<About />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;