function ApiPostCard({ title, body, id }) {
    return (
        <article className="api-card">
            <span className="api-card-id">
                Post #{id}
            </span>

            <h2>{title}</h2>

            <p>{body}</p>
        </article>
    );
}

export default ApiPostCard;