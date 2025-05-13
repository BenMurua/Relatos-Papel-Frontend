import React from "react";
import BookCard from "../BookCard/BookCard";
import "./BookGrid.css";
import { getAllBooks } from "../../utils/BookUtils";

const BookGrid = () => {
  const books = getAllBooks();

  return (
    <div className="book__grid">
      {books.map((book, index) => (
        <BookCard
          key={index}
          bookImage={book.image}
          title={book.title}
          author={book.author}
          price={book.price}
        />
      ))}
    </div>
  );
};

export default BookGrid;
