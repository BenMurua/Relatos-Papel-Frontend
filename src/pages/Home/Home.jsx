import { useState } from "react";
import BookGrid from "../../components/BookGrid/BookGrid";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterCheckBox from "../../components/FilterCheckBox/FilterCheckBox";
import { getAllBooks, searchBooks } from "../../utils/BookUtils";
import "./Home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const books = getAllBooks();

  const authors = [...new Set(books.map((book) => book.author))];

  let filteredBooks = searchBooks(books, search, searchType);

  if (selectedAuthors.length > 0) {
    filteredBooks = filteredBooks.filter((book) =>
      selectedAuthors.includes(book.author)
    );
  }

  const handleAuthorChange = (author) => {
    setSelectedAuthors((prev) =>
      prev.includes(author)
        ? prev.filter((a) => a !== author)
        : [...prev, author]
    );
  };

  return (
    <div className="home">
      <div className="home__filters">
        <FilterCheckBox
          authors={authors}
          selectedAuthors={selectedAuthors}
          onChange={handleAuthorChange}
        />
      </div>
      <div className="home__content">
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
