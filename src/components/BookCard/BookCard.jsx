import "./BookCard.css";
import { useContext } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { BookCardContext } from "../../context/bookCardContext.jsx";

const BookCard = ({ id, bookImage, title, author, price }) => {
  const { addBookToCart } = useContext(BookCardContext);

  const handleAddToCart = () => {
    const book = { id: id, quantity: author };
    addBookToCart(book);
  };

  return (
    <div className="book__card">
      <img src={bookImage} className="book__image"></img>

      <h3> {title}</h3>
      <h4> {author}</h4>
      <h4> {price}€ </h4>

      <button onClick={handleAddToCart} className="add__cart">
        {" "}
        Add to cart{" "}
      </button>
      <QuantitySelector className="quantity__selector"></QuantitySelector>
    </div>
  );
};

export default BookCard;
