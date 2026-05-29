function SearchBox({ searchTerm, onSearchChange, onClearSearch }) {
    return (
        <div className="search-box">
            <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={onSearchChange}
            />

            {searchTerm !== "" && (
                <button className="clear-search-btn" onClick={onClearSearch}>
                    Clear
                </button>
            )}
        </div>
    );
}

export default SearchBox;