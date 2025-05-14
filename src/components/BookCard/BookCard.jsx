import "./BookCard.css";
import { useState } from "react";
import { useContext } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { BookCardContext } from "../../context/bookCardContext.jsx";

const BookCard = ({ id, bookImage, title, author, price }) => {
  const [bookQuantity, setBookQuantity] = useState(0);
  const handleQuantityChange = (newQuantity) => {
    setBookQuantity(newQuantity);
  };

  const { addBook } = useContext(BookCardContext);

  const handleAddToCart = () => {
    console.log("Cantidad seleccionada:", bookQuantity);
    const book = { id: id, quantity: bookQuantity };
    addBook(book);
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
      <QuantitySelector
        quantity={bookQuantity}
        className="quantity__selector"
        handleQuantityChange={handleQuantityChange}
      ></QuantitySelector>
    </div>
  );
};

export default BookCard;
