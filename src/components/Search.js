const SearchBar = () => (
    <div className="block">
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search products</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search products..."
            name="s"
        />
        <button className="submit" type="submit">Search</button>
    </form>
    </div>
);

export default SearchBar;