import "./CartResume.css";

function CartResume({ items, onConfirmPayment }) {
  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalPrice = calculateTotalPrice();

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
        Ir a pagar
      </button>
    </aside>
  );
}

export default CartResume;
