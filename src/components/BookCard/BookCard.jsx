import "./BookCard.css";
import { useState } from "react";
import { useContext } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { BookCardContext } from "../../context/bookCardContext.jsx";
import { useNavigate } from "react-router-dom";
import { RoutesValues } from "../../models/RoutesValues.js";
const BookCard = ({ id, bookImage, title, author, price }) => {
  const navigate = useNavigate();
  const [bookQuantity, setBookQuantity] = useState(0);
  const handleQuantityChange = (newQuantity) => {
    setBookQuantity(newQuantity);
  };

  const { addBook } = useContext(BookCardContext);

  const handleAddToCart = () => {
    const book = { id: id, quantity: bookQuantity };
    addBook(book);
  };

  //MOMENTANEO, HASTA QUE TENGAMOS EL BOTON EN EL POP UP DE ADRIAN PARA NAVEGAR A LA VISTA DETALLADA DEL CARRITO
  //ELIMINAR COMENTARIO CUANDO TENGAMOS EL BOTON EN EL POP UP
  const navigateToCart = () => {
    navigate(RoutesValues.cart);
  };
  return (
    <div className="book__card">
      <img src={bookImage} className="book__image"></img>
      <button onClick={navigateToCart}>x</button>
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
