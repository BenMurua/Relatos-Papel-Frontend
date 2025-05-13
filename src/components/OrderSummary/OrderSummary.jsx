import "./OrderSummary.css";

const OrderSummary = ({ title, products }) => {
  const subtotal = products.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const shippingCost = 5;
  const total = subtotal + shippingCost;

  return (
    <div className="order-summary">
      <h2 className="order-summary__title">{title}</h2>
      <br />

      <div className="order-summary__product-list">
        <h2 className="order-summary__subtitle">PRODUCTO</h2>
        <br />

        {products.map((product, index) => (
          <div key={index} className="order-summary__row">
            <div className="order-summary__item-name">{product.name}</div>
            <div className="order-summary__item-price">
              x{product.quantity} {product.price}€
            </div>
          </div>
        ))}

        <div className="order-summary__row">
          <div className="order-summary__item-name">
            <h3 className="order-summary__label">Subtotal</h3>
          </div>
          <div className="order-summary__item-price">{subtotal}€</div>
        </div>

        <div className="order-summary__row">
          <div className="order-summary__item-name">
            <h3 className="order-summary__label">Envío</h3>
          </div>
          <div className="order-summary__item-price">{shippingCost}€</div>
        </div>

        <div className="order-summary__row order-summary__row--total">
          <div className="order-summary__item-name">
            <h2 className="order-summary__total-label">TOTAL</h2>
          </div>
          <div className="order-summary__item-price">{total}€</div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
