import { createContext, useState, useEffect } from "react";

export const BookCardContext = createContext();
export const BookCardProvider = ({ children }) => {
  const [bookCard, setBookCard] = useState(
    localStorage.getItem("app-bookCard") || []
  );

  useEffect(() => {
    localStorage.setItem("app-bookCard", JSON.stringify(bookCard));
  }, [bookCard]);

  //Funcion para añadir libros al carrito
  const addBookToCart = (book) => {
    setBookCard((prevBookCard) => [...prevBookCard, book]);
  };

  return (
    <BookCardContext.Provider value={{ bookCard, addBookToCart }}>
      {children}
    </BookCardContext.Provider>
  );
};
