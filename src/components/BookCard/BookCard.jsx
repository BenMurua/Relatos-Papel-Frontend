import "./BookCard.css";
import { useState, useContext } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { BookCardContext } from "../../context/bookCardContext.jsx";
import { useOutletContext } from "react-router-dom";

const BookCard = ({ id, bookImage, title, author, price }) => {
  const [bookQuantity, setBookQuantity] = useState(0);
  const { addBook } = useContext(BookCardContext);
  const { toggleCart } = useOutletContext();

  const handleQuantityChange = (newQuantity) => {
    setBookQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const book = { id: id, quantity: bookQuantity, title: title, price: price };
    addBook(book);
    if (book.quantity) {
      toggleCart(true);
    }
  };

  return (
    <div className="book-card">
      <img src={bookImage} alt={title} className="book-card__image" />
      <h3 className="book-card__title">{title}</h3>
      <h4 className="book-card__author">{author}</h4>
      <h4 className="book-card__price">{price}€</h4>

      <button onClick={handleAddToCart} className="book-card__button">
        Add to cart
      </button>

      <div className="book-card__quantity-selector">
        <QuantitySelector
          quantity={bookQuantity}
          handleQuantityChange={handleQuantityChange}
        />
      </div>
    </div>
  );
};

export default BookCard;
