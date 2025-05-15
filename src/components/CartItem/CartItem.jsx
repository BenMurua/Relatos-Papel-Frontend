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
    <article className="cart-item" aria-labelledby={`item-title-${id}`}>
      <img
        src={image}
        alt={`Portada de ${title}`}
        className="cart-item-image"
      />
      <div className="cart-item-info">
        <h2 id={`item-title-${id}`} className="cart-item-title">
          {title}
        </h2>
        <p className="cart-item-author">por {author}</p>
        <p className="cart-item-description">
          {truncateDescription(description, 150)}
        </p>{" "}
        <p className="cart-item-price-unit">{price.toFixed(2)} €</p>
      </div>
      <div className="cart-item-controls">
        <QuantitySelector
          quantity={bookQuantity}
          handleQuantityChange={handleQuantityChange}
        />
        <div className="cart-item-subtotal">
          Subtotal: {(price * bookQuantity).toFixed(2)} €
        </div>
        <button
          onClick={() => onRemoveItem(id)}
          className="cart-item-remove-button"
          aria-label={`Eliminar ${title} del carrito`}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default CartItem;
