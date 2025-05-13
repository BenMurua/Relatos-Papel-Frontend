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

export const searchBooks = (searchTerm) => {
  if (
    !searchTerm ||
    typeof searchTerm !== "string" ||
    searchTerm.trim() === ""
  ) {
    return [];
  }
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return this.getAllBooks().filter(
    (book) =>
      book.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      book.author.toLowerCase().includes(lowerCaseSearchTerm) ||
      book.description.toLowerCase().includes(lowerCaseSearchTerm)
  );
};

export const getBooksByAuthor = (authorName) => {
  if (
    !authorName ||
    typeof authorName !== "string" ||
    authorName.trim() === ""
  ) {
    return [];
  }
  const lowerCaseAuthorName = authorName.toLowerCase();
  return mockBooks.filter((book) =>
    book.author.toLowerCase().includes(lowerCaseAuthorName)
  );
};
