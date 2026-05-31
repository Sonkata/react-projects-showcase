import { useEffect, useState } from "react";
import ApiPostCard from "../components/ApiPostCard";
import ApiSearchBox from "../components/ApiSearchBox";

function ApiDemo() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [postSearchTerm, setPostSearchTerm] = useState("");

    async function fetchPosts() {
        setLoading(true);
        setError("");

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");

            if (!response.ok) {
                throw new Error("Failed to fetch posts.");
            }

            const data = await response.json();

            setPosts(data.slice(0, 6));
        } catch (error) {
            setError("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    function handlePostSearchChange(event) {
        setPostSearchTerm(event.target.value);
    }

    function handleClearPostSearch() {
        setPostSearchTerm("");
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const filteredPosts = posts.filter((post) => {
        const searchText = postSearchTerm.toLowerCase();

        const matchesTitle = post.title.toLowerCase().includes(searchText);
        const matchesBody = post.body.toLowerCase().includes(searchText);

        return matchesTitle || matchesBody;
    });

    if (loading) {
        return (
            <section className="page-section">
                <h1>API Demo</h1>

                <p className="loading-text">
                    Loading posts...
                </p>
            </section>
        );
    }

    if (error !== "") {
        return (
            <section className="page-section">
                <h1>API Demo</h1>

                <div className="api-error">
                    <h2>Error</h2>
                    <p>{error}</p>

                    <button className="reload-btn" onClick={fetchPosts}>
                        Try Again
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="page-section">
            <h1>API Demo</h1>

            <p className="page-description">
                This page loads example posts from a public API using fetch,
                async/await and useEffect.
            </p>

            <ApiSearchBox
                postSearchTerm={postSearchTerm}
                onPostSearchChange={handlePostSearchChange}
                onClearPostSearch={handleClearPostSearch}
            />

            <p className="results-count">
                Showing {filteredPosts.length} of {posts.length} posts
            </p>

            <button className="reload-btn" onClick={fetchPosts}>
                Reload Posts
            </button>

            {filteredPosts.length === 0 ? (
                <div className="empty-state">
                    <h2>No posts found.</h2>
                    <p>Try another search term.</p>
                </div>
            ) : (
                <section className="api-grid">
                    {filteredPosts.map((post) => (
                        <ApiPostCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                        />
                    ))}
                </section>
            )}
        </section>
    );
}

export default ApiDemo;