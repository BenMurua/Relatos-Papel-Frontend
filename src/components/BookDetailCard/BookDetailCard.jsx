import "./BookDetailCard.css";
import { useState, useContext } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector.jsx";
import { BookCardContext } from "../../context/bookCardContext.jsx";
import { useNavigate } from "react-router-dom";
import { RoutesValues } from "../../models/RoutesValues.js";

const BookDetailCard = ({ selectedBook }) => {
  const navigate = useNavigate();
  const [bookQuantity, setBookQuantity] = useState(0);
  const { addBook } = useContext(BookCardContext);

  const handleQuantityChange = (newQuantity) => {
    setBookQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const book = { id: selectedBook.id, quantity: bookQuantity };
    addBook(book);
  };

  //MOMENTANEO, HASTA QUE TENGAMOS EL BOTON EN EL POP UP DE ADRIAN PARA NAVEGAR A LA VISTA DETALLADA DEL CARRITO
  //ELIMINAR COMENTARIO CUANDO TENGAMOS EL BOTON EN EL POP UP

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
