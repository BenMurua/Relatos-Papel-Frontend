import "./SearchBar.css";

const SearchBar = ({ value, onChange, searchType, onTypeChange }) => {
  return (
    <div className="search">
      <select
        className="search__select"
        value={searchType}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="title">Título</option>
        <option value="author">Autor</option>
      </select>
      <span className="material-icons search__icon">search</span>
      <input
        type="text"
        placeholder={
          searchType === "author"
            ? "Busca aquí por autor..."
            : "Busca aquí tu libro favorito..."
        }
        className="search__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
