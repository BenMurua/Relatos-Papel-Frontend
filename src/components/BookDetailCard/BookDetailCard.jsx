import "./BookDetailCard.css";
import { useState, useContext } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector.jsx";
import { BookCardContext } from "../../context/bookCardContext.jsx";

const BookDetailCard = ({ selectedBook }) => {
  const [bookQuantity, setBookQuantity] = useState(0);
  const { addBook } = useContext(BookCardContext);

  const handleQuantityChange = (newQuantity) => {
    setBookQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const book = {
      id: selectedBook.id,
      quantity: bookQuantity,
      title: selectedBook.title,
      price: selectedBook.price,
    };
    addBook(book);
    handleQuantityChange(0);
  };

  return (
    <div className="detail-card">
      <img
        src={selectedBook.bookImage}
        alt={selectedBook.title}
        className="detail-card__image"
      />
      <h1 className="detail-card__title">{selectedBook.title}</h1>
      <h2 className="detail-card__author">{selectedBook.author}</h2>
      <h2 className="detail-card__price">{selectedBook.price}€</h2>
      <h3 className="detail-card__description">{selectedBook.description}</h3>

      <button onClick={handleAddToCart} className="detail-card__button">
        Add to cart
      </button>

      <div className="detail-card__quantity-selector">
        <QuantitySelector
          quantity={bookQuantity}
          handleQuantityChange={handleQuantityChange}
        />
      </div>
    </div>
  );
};

export default BookDetailCard;
