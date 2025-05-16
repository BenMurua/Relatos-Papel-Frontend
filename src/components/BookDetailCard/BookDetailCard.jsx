import "./BookDetailCard.css";
import { useContext } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector.jsx";
import { BookCardContext } from "../../context/bookCardContext.jsx";
import { useBookCardQuantity } from "../../Hooks/Hooks.js";
import { useOutletContext } from "react-router-dom";
const BookDetailCard = ({ selectedBook }) => {
  const { bookQuantity, handleQuantityChange } = useBookCardQuantity();
  const { addBook } = useContext(BookCardContext);
  const { toggleCart } = useOutletContext();

  const handleAddToCart = () => {
    const book = {
      id: selectedBook.id,
      quantity: bookQuantity,
      title: selectedBook.title,
      price: selectedBook.price,
    };
    addBook(book);
    handleQuantityChange(0);
    toggleCart(true);
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
