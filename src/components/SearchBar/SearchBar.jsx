import "./SearchBar.css";

const SearchBar = ({ value, onChange, searchType, onTypeChange }) => {
  return (
    <div className="search-bar">
      <select
        className="search-bar-select"
        value={searchType}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="title">Título</option>
        <option value="author">Autor</option>
      </select>
      <span className="material-icons search-bar-icon">search</span>
      <input
        type="text"
        placeholder={
          searchType === "author"
            ? "Busca aquí por autor..."
            : "Busca aquí tu libro favorito..."
        }
        className="search-bar-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
