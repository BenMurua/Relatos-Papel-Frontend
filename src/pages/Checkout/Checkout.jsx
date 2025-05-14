import "./Checkout.css";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
import FacturationUserForm from "../../components/FacturationUserForm/FacturationUserForm";

const Checkout = () => {
  const handleFinishPayment = () => {
    alert("Pago realizado con éxito");
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <h1 className="checkout__title">Datos de Facturación</h1>
        <FacturationUserForm />
      </div>
      <div className="checkout__right">
        <div className="checkout__summary">
          <h2 className="checkout__subtitle">Resumen del pedido</h2>
          <OrderSummary />
        </div>
        <div className="checkout__payment">
          <h2 className="checkout__subtitle">Método de pago</h2>
          <PaymentMethod onFinishPayment={handleFinishPayment} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
