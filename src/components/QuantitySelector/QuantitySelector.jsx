import { useState } from "react";
import "./QuantitySelector.css";

function QuantitySelector({ quantity, handleQuantityChange }) {
  const onIncrease = () => {
    quantity++;
    handleQuantityChange(quantity);
  };

  const onDecrease = () => {
    quantity--;
    handleQuantityChange(quantity);
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      quantity = value;
    } else if (e.target.value === "") {
      quantity = 1;
    }
  };

  return (
    <div className="quantity-selector">
      <button
        onClick={onDecrease}
        disabled={quantity === 0}
        aria-label="Reducir cantidad"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min="0"
        className="quantity-input"
        aria-label="Cantidad"
      />
      <button onClick={onIncrease} aria-label="Aumentar cantidad">
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
