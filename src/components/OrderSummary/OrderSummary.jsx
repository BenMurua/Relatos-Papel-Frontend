import "./OrderSummary.css";
/* Los valores no pueden estar hardcodeados, deberán recibirse mediante props de manera dinámica */

const OrderSummary = () => {
  return (
    <div className="order-summary">
      <h2 className="order-summary__title">TU PEDIDO</h2>
      <br />

      <div className="order-summary__product-list">
        <h2 className="order-summary__subtitle">PRODUCTO</h2>
        <br />

        <div className="order-summary__row">
          <div className="order-summary__item-name">El Principito</div>
          <div className="order-summary__item-price">x1 20€</div>
        </div>

        <div className="order-summary__row">
          <div className="order-summary__item-name">El lobo estepario</div>
          <div className="order-summary__item-price">x1 20€</div>
        </div>

        <div className="order-summary__row">
          <div className="order-summary__item-name">
            <h3 className="order-summary__label">Subtotal</h3>
          </div>
          <div className="order-summary__item-price">40€</div>
        </div>

        <div className="order-summary__row">
          <div className="order-summary__item-name">
            <h3 className="order-summary__label">Envío</h3>
          </div>
          <div className="order-summary__item-price">5€</div>
        </div>

        <div className="order-summary__row order-summary__row--total">
          <div className="order-summary__item-name">
            <h2 className="order-summary__total-label">TOTAL</h2>
          </div>
          <div className="order-summary__item-price">45€</div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
