import "./BookCard.css";
import { useState, useContext } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { BookCardContext } from "../../context/bookCardContext.jsx";
import { useNavigate } from "react-router-dom";
import { RoutesValues } from "../../models/RoutesValues.js";
const BookCard = ({ id, bookImage, title, author, price }) => {
  const navigate = useNavigate();
  const [bookQuantity, setBookQuantity] = useState(0);
  const { addBook } = useContext(BookCardContext);

  const handleQuantityChange = (newQuantity) => {
    setBookQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const book = { id: id, quantity: bookQuantity, title: title, price: price };
    addBook(book);
  };

  //MOMENTANEO, HASTA QUE TENGAMOS EL BOTON EN EL POP UP DE ADRIAN PARA NAVEGAR A LA VISTA DETALLADA DEL CARRITO
  //ELIMINAR COMENTARIO CUANDO TENGAMOS EL BOTON EN EL POP UP
  const navigateToCart = () => {
    navigate(RoutesValues.cart);
  };
  return (
    <div className="book-card">
      <img src={bookImage} alt={title} className="book-card__image" />
      <button onClick={navigateToCart}>x</button>
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
