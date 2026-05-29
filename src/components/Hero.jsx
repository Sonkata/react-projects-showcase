function Hero({ totalProjects }) {
    return (
        <section className="hero">
            <p className="hero-label">Front-End Portfolio</p>

            <h1>Projects Showcase</h1>

            <p className="hero-description">
                A collection of my front-end projects built with HTML, CSS,
                JavaScript and React.
            </p>

            <div className="hero-stats">
                <div>
                    <strong>{totalProjects}</strong>
                    <span>Projects</span>
                </div>

                <div>
                    <strong>3</strong>
                    <span>Live Demos</span>
                </div>

                <div>
                    <strong>React</strong>
                    <span>Current Focus</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;