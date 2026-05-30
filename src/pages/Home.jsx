import Hero from "../components/Hero";

function Home({ totalProjects }) {
    return (
        <>
            <Hero totalProjects={totalProjects} />
        </>
    );
}

export default Home;