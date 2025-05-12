import "./PaymentMethod.css";

const PaymentMethod = () => {
  return (
    <div className="payment-method">
      <form className="payment-method-form">
        <fieldset className="payment-method__fieldset">
          <legend className="payment-method__legend">
            <h2 className="payment-method__title">MÉTODO DE PAGO</h2>
          </legend>

          <div className="payment-method__option">
            <input
              type="radio"
              id="paypal"
              name="pago"
              value="paypal"
              className="payment-method__input"
            />
            <label htmlFor="paypal" className="payment-method__label">
              Paypal
            </label>
          </div>

          <div className="payment-method__option">
            <input
              type="radio"
              id="transferencia"
              name="pago"
              value="transferencia"
              className="payment-method__input"
            />
            <label htmlFor="transferencia" className="payment-method__label">
              Transferencia bancaria directa
            </label>
          </div>

          <div className="payment-method__option">
            <input
              type="radio"
              id="stripe"
              name="pago"
              value="stripe"
              className="payment-method__input"
            />
            <label htmlFor="stripe" className="payment-method__label">
              Pago a través de Stripe
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default PaymentMethod;
