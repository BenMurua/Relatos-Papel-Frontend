import React from "react";
import BookCard from "../BookCard/BookCard";
import "./BookGrid.css";

const BookGrid = ({ books }) => {
  return (
    <div className="book__grid">
      {books.map((book, index) => (
        <BookCard
          key={index}
          id={book.id}
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
