import React from "react";
import "./QuantitySelector.css";

function QuantitySelector({ quantity, onIncrease, onDecrease, onQuantitySet }) {
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      onQuantitySet(value);
    } else if (e.target.value === "") {
      // Permite borrar para escribir, pero podría necesitar validación al perder foco
      onQuantitySet(1); // O manejar un estado intermedio
    }
  };

  return (
    <div className="quantity-selector">
      <button
        onClick={onDecrease}
        disabled={quantity <= 1}
        aria-label="Reducir cantidad"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        onBlur={(e) => {
          // Asegurar que no quede vacío o inválido
          if (
            parseInt(e.target.value, 10) < 1 ||
            isNaN(parseInt(e.target.value, 10))
          ) {
            onQuantitySet(1);
          }
        }}
        min="1"
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
