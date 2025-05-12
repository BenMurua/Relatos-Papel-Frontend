import "./Checkout.css";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
import FacturationUserForm from "../../components/FacturationUserForm/FacturationUserForm";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <FacturationUserForm />
      </div>
      <div className="checkout__right">
        <div className="checkout__summary">
          <OrderSummary />
        </div>
        <div className="checkout__payment">
          <PaymentMethod />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
