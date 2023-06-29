import "./index.css";

const SearchBar = ({ searchValue, setSearchValue, setProductSection }) => {
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setProductSection("searchList");
  };

  const onHandleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form className="SearchBar" onSubmit={onHandleSubmit}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        className="SearchBar__searchInput"
        placeholder="Search drink by name"
        name="search"
        value={searchValue}
        onChange={onHandleSearch}
      />
      <input type="submit" className="SearchBar__submitButton" value="🔍" />
    </form>
  );
};

export default SearchBar;
