import { getAllBooks } from "../../utils/BookUtils";
import "./OrderSummary.css";

const OrderSummary = () => {
  const products = getAllBooks();
  const subtotal = products.reduce((sum, item) => sum + 1 * item.price, 0);
  const shippingCost = 5;
  const total = subtotal + shippingCost;

  return (
    <div className="order-summary">
      <h2>Subtotal</h2>
      <br />

      <div className="order-summary__product-list">
        <h2>PRODUCTO</h2>
        <br />

        {products.map((product, index) => (
          <div key={index} className="order-summary__row">
            <div className="order-summary__item-name">{product.title}</div>
            <div className="order-summary__item-price">
              x{1} {product.price}€
            </div>
          </div>
        ))}

        <div className="order-summary__row">
          <div className="order-summary__item-name">
            <h3>Subtotal</h3>
          </div>
          <div className="order-summary__item-price">{subtotal}€</div>
        </div>

        <div className="order-summary__row">
          <div className="order-summary__item-name">
            <h3>Envío</h3>
          </div>
          <div className="order-summary__item-price">{shippingCost}€</div>
        </div>

        <div className="order-summary__row order-summary__row--total">
          <div className="order-summary__item-name">
            <h2>TOTAL</h2>
          </div>
          <div className="order-summary__item-price">{total}€</div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
