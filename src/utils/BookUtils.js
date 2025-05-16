import mockBooks from "../assets/data/Books.js";

export const getAllBooks = () => {
  return mockBooks;
};

export const getBookById = (id) => {
  const bookId = parseInt(id, 10);
  if (isNaN(bookId)) {
    return undefined;
  }
  return mockBooks.find((book) => book.id === bookId);
};

export const searchBooks = (books, search, searchType) => {
  const term = search.trim().toLowerCase();
  if (!term) return books;
  if (searchType === "author") {
    return books.filter((book) => book.author.toLowerCase().includes(term));
  }

  return books.filter((book) => book.title.toLowerCase().includes(term));
};
