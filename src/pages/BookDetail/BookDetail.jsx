import { useState } from "react";
import BookGrid from "../../components/BookGrid/BookGrid";
import "./BookDetail.css";
import BookDetailCard from "../../components/BookDetailCard/BookDetailCard";
import { useLocation } from "react-router-dom";

const BookDetail = () => {
  const location = useLocation();
  const selectedBook = location.state?.selectedBook;

  return (
    <div className="book-detail">
      <div className="book-detail__content">
        <BookDetailCard selectedBook={selectedBook} />
      </div>
    </div>
  );
};

export default BookDetail;
