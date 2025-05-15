import { useState } from "react";
import Books from "../../assets/data/Books";
import "./OrderSummary.css";

const OrderSummary = () => {
  const simulatedCart = [
    { id: 0, quantity: 2 },
    { id: 2, quantity: 1 },
    { id: 4, quantity: 7 },
  ];

  const products = simulatedCart.map((item) => {
    const book = Books.find((b) => b.id === item.id);
    return {
      ...book,
      quantity: item.quantity,
    };
  });

  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const shippingOptions = {
    standard: { label: "Estándar (3-5 días)", cost: 5 },
    express: { label: "Exprés (24-48h)", cost: 10 },
    pickup: { label: "Recogida en tienda", cost: 0 },
  };

  const [selectedShipping, setSelectedShipping] = useState("standard");
  const shippingCost = shippingOptions[selectedShipping].cost;
  const total = subtotal + shippingCost;

  return (
    <div className="order-summary">
      <h2>Resumen del pedido</h2>
      <br />

      <div className="order-summary__product-list">
        <h2>PRODUCTO</h2>
        <br />

        {products.map((product) => (
          <div key={product.id} className="order-summary__row">
            <div className="order-summary__item-name">{product.title}</div>
            <div className="order-summary__item-price">
              x{product.quantity} {product.price.toFixed(2)}€
            </div>
          </div>
        ))}

        <div className="order-summary__row">
          <div className="order-summary__item-name">
            <h3>Subtotal</h3>
          </div>
          <div className="order-summary__item-price">
            {subtotal.toFixed(2)}€
          </div>
        </div>

        {/* Selección de envío */}
        <div className="order-summary__row">
          <div className="order-summary__item-name">
            <h3>Envío</h3>
          </div>
          <div className="order-summary__item-price">
            <select
              value={selectedShipping}
              onChange={(e) => setSelectedShipping(e.target.value)}
              className="order-summary__select"
            >
              {Object.entries(shippingOptions).map(([key, option]) => (
                <option key={key} value={key}>
                  {option.label} - {option.cost.toFixed(2)}€
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="order-summary__row order-summary__row--total">
          <div className="order-summary__item-name">
            <h2>TOTAL</h2>
          </div>
          <div className="order-summary__item-price">{total.toFixed(2)}€</div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
