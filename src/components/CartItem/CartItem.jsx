import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { useState } from "react";
import "./CartItem.css";

function CartItem({ item, onBookUpdate, onRemoveItem }) {
  const { id, image, title, author, description, price, quantity } = item;

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, text.lastIndexOf(" ", maxLength)) + "...";
  };
  const [bookQuantity, setBookQuantity] = useState(quantity);

  const handleQuantityChange = (newQuantity) => {
    setBookQuantity(newQuantity);
    const updatedItem = { ...item, quantity: newQuantity };
    onBookUpdate(updatedItem);
  };

  return (
    <article className="cart-item" aria-labelledby={`cart-item__title-${id}`}>
      <img
        src={image}
        alt={`Portada de ${title}`}
        className="cart-item__image"
      />
      <div className="cart-item__info">
        <h2 id={`cart-item__title-${id}`} className="cart-item__title">
          {title}
        </h2>
        <p className="cart-item__author">por {author}</p>
        <p className="cart-item__description">
          {truncateDescription(description, 150)}
        </p>
        <p className="cart-item__price-unit">{price.toFixed(2)} €</p>
      </div>
      <div className="cart-item__controls">
        <QuantitySelector
          quantity={bookQuantity}
          handleQuantityChange={handleQuantityChange}
        />
        <div className="cart-item__subtotal">
          Subtotal: {(price * bookQuantity).toFixed(2)} €
        </div>
        <button
          onClick={() => onRemoveItem(id)}
          className="cart-item__remove-button"
          aria-label={`Eliminar ${title} del carrito`}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default CartItem;
