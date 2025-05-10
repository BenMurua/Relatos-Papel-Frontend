import "./OrderSummary.css";

const OrderSummary = () => {
  return (
    <div className="order_summary">
      <h2>TU PEDIDO</h2>
      <br />
      <div className="product_list">
        <h2>PRODUCTO</h2>
        <br />
        <div class="container">
          <div class="left">El Principito</div>
          <div class="right">x1 20€</div>
        </div>
        <div class="container">
          <div class="left">El lobo estepario</div>
          <div class="right">x1 20€</div>
        </div>
        <div class="container">
          <div class="left">
            <h3>Subtotal</h3>
          </div>
          <div class="right">40€</div>
        </div>
        <div class="container">
          <div class="left">
            <h3>Envío</h3>
          </div>
          <div class="right">5€</div>
        </div>
        <div class="container">
          <div class="left">
            <h2>TOTAL</h2>
          </div>
          <div class="right">45€</div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
