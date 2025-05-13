import React from "react";
import "./OrderResume.css";

function OrderResume({ totalPrice, items, onConfirmPayment }) {
  return (
    <aside className="order-summary">
      <h2>Compra total</h2>
      <div className="order-summary-total-price">{totalPrice.toFixed(2)} €</div>
      <ul
        className="order-summary-items-list"
        aria-label="Resumen de artículos"
      >
        {items.map((item) => (
          <li key={item.id}>• {item.title}</li>
        ))}
      </ul>
      <button
        onClick={onConfirmPayment}
        className="order-summary-confirm-button"
      >
        Confirmar pago
      </button>
    </aside>
  );
}

export default OrderResume;
