function ApiSearchBox({
    postSearchTerm,
    onPostSearchChange,
    onClearPostSearch
}) {
    return (
        <div className="search-box api-search-box">
            <input
                type="text"
                placeholder="Search API posts..."
                value={postSearchTerm}
                onChange={onPostSearchChange}
            />

            {postSearchTerm !== "" && (
                <button className="clear-search-btn" onClick={onClearPostSearch}>
                    Clear
                </button>
            )}
        </div>
    );
}

export default ApiSearchBox;