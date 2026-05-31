import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";

import { projects } from "./data/projects";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ApiDemo from "./pages/ApiDemo";
import NotFound from "./pages/NotFound";

function App() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const [savedProjectIds, setSavedProjectIds] = useState(() => {
        const savedProjectsFromStorage = localStorage.getItem("savedProjects");

        if (savedProjectsFromStorage === null) {
            return [];
        }

        return JSON.parse(savedProjectsFromStorage);
    });

    useEffect(() => {
        localStorage.setItem("savedProjects", JSON.stringify(savedProjectIds));
    }, [savedProjectIds]);

    function handleCategoryChange(category) {
        setSelectedCategory(category);
    }

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
    }

    function handleClearSearch() {
        setSearchTerm("");
    }

    function handleToggleSaveProject(projectId) {
        if (savedProjectIds.includes(projectId)) {
            setSavedProjectIds((prevIds) =>
                prevIds.filter((id) => id !== projectId)
            );
        } else {
            setSavedProjectIds((prevIds) => [...prevIds, projectId]);
        }
    }

    function handleClearSavedProjects() {
        setSavedProjectIds([]);
    }

    const filteredProjects = projects.filter((project) => {
        const matchesCategory =
            selectedCategory === "all" ||
            project.category === selectedCategory ||
            (selectedCategory === "saved" && savedProjectIds.includes(project.id));

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
                            savedProjectIds={savedProjectIds}
                            savedProjectsCount={savedProjectIds.length}
                            onToggleSaveProject={handleToggleSaveProject}
                            onClearSavedProjects={handleClearSavedProjects}
                        />
                    }
                />

                <Route
                    path="/projects/:projectId"
                    element={
                        <ProjectDetails
                            projects={projects}
                            savedProjectIds={savedProjectIds}
                            onToggleSaveProject={handleToggleSaveProject}
                        />
                    }
                />

                <Route path="/about" element={<About />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/api-demo" element={<ApiDemo />} />

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
