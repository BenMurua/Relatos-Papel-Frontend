import "./BookCard.css";
import { useContext } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { BookCardContext } from "../../context/bookCardContext.jsx";
import { useNavigate } from "react-router-dom";
import { RoutesValues } from "../../models/RoutesValues.js";
import { useOutletContext } from "react-router-dom";
import { useBookCardQuantity } from "../../Hooks/Hooks.js";
const BookCard = ({ id, bookImage, title, author, price, description }) => {
  const navigate = useNavigate();
  const { bookQuantity, handleQuantityChange } = useBookCardQuantity();

  const { addBook } = useContext(BookCardContext);
  const { toggleCart } = useOutletContext();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const book = { id: id, quantity: bookQuantity, title: title, price: price };
    addBook(book);
    handleQuantityChange(0);
    if (book.quantity) {
      toggleCart(true);
    }
  };

  const navigatetobookdetail = () => {
    const book = {
      id: id,
      title: title,
      bookImage: bookImage,
      author: author,
      price: price,
      description: description,
    };
    navigate(RoutesValues.bookDetail, { state: { selectedBook: book } });
  };

  return (
    <div onClick={navigatetobookdetail} className="book-card">
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
