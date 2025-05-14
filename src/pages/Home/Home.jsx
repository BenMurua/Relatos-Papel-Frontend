import { useState } from "react";
import BookGrid from "../../components/BookGrid/BookGrid";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterCheckBox from "../../components/FilterCheckBox/FilterCheckBox";
import { getAllBooks, searchBooks } from "../../utils/BookUtils";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const books = getAllBooks();

  // Obtener autores únicos
  const authors = [...new Set(books.map((book) => book.author))];

  // Filtrado por search y searchType
  let filteredBooks = searchBooks(books, search, searchType);

  // Filtrado adicional por autores seleccionados
  if (selectedAuthors.length > 0) {
    filteredBooks = filteredBooks.filter((book) =>
      selectedAuthors.includes(book.author)
    );
  }

  // Manejar selección de autores
  const handleAuthorChange = (author) => {
    setSelectedAuthors((prev) =>
      prev.includes(author)
        ? prev.filter((a) => a !== author)
        : [...prev, author]
    );
  };

  return (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
      <div>
        <FilterCheckBox
          authors={authors}
          selectedAuthors={selectedAuthors}
          onChange={handleAuthorChange}
        />
      </div>
      <div style={{ flex: 1 }}>
        <SearchBar
          value={search}
          onChange={setSearch}
          searchType={searchType}
          onTypeChange={setSearchType}
        />
        <BookGrid books={filteredBooks} />
      </div>
    </div>
  );
};

export default Home;
