import { createContext, useState, useEffect } from "react";

export const BookCardContext = createContext();
export const BookCardProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]);

  const addBook = (book) => {
    const bookToUpdate = bookList.find((item) => item.id === book.id);
    if (bookToUpdate) {
      const updatedBookList = bookList.map((item) =>
        item.id === bookToUpdate.id
          ? { ...item, quantity: bookToUpdate.quantity + book.quantity }
          : item
      );
      setBookList(updatedBookList);
    } else {
      if (book.quantity != 0) {
        setBookList((prev) => [...prev, newBook]);
        const newBook = { ...book, quantity: book.quantity };
      }
    }
  };

  const deleteBook = (bookToDelete) => {
    const updatedBookList = bookList.filter(
      (book) => book.id !== bookToDelete.id
    );
    setBookList(updatedBookList);
  };

  return (
    <BookCardContext.Provider value={{ bookList, addBook, deleteBook }}>
      {children}
    </BookCardContext.Provider>
  );
};
