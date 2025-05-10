import "./PaymentMethod.css";

const PaymentMethod = () => {
  return (
    <div className="payment_method">
      <fieldset>
        <legend>
          <h2>MÉTODO DE PAGO</h2>
        </legend>
        <div>
          <input type="radio" id="paypal" name="pago" value="paypal" />
          <label htmlFor="paypal">Paypal</label>
        </div>
        <div>
          <input
            type="radio"
            id="transferencia"
            name="pago"
            value="transferencia"
          />
          <label htmlFor="transferencia">Transferencia bancaria directa</label>
        </div>
        <div>
          <input type="radio" id="stripe" name="pago" value="stripe" />
          <label htmlFor="stripe">Pago a través de Stripe</label>
        </div>
      </fieldset>
    </div>
  );
};

export default PaymentMethod;
