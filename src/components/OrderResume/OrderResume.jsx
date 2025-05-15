import "./OrderResume.css";

function OrderResume({ totalPrice, items, onConfirmPayment }) {
  return (
    <aside className="order">
      <h2 className="order__title">Compra total</h2>
      <div className="order__total">{totalPrice.toFixed(2)} €</div>
      <ul className="order__items" aria-label="Resumen de artículos">
        {items.map((item) => (
          <li key={item.id} className="order__item">
            • {item.title}
          </li>
        ))}
      </ul>
      <button onClick={onConfirmPayment} className="order__button">
        Confirmar pago
      </button>
    </aside>
  );
}

export default OrderResume;
