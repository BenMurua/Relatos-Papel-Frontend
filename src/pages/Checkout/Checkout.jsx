import "./Checkout.css";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
import FacturationUserForm from "../../components/FacturationUserForm/FacturationUserForm";
import { useContext } from "react";
import { BookCardContext } from "../../context/bookCardContext.jsx";
import { useNavigate } from "react-router-dom";
import { RoutesValues } from "../../models/RoutesValues";

const Checkout = () => {
  const { updatedBookList } = useContext(BookCardContext);
  const navigate = useNavigate();

  const handleFinishPayment = () => {
    alert("Pago realizado con éxito");
    updatedBookList([]);
    setTimeout(() => {
      navigate(RoutesValues.app);
    }, 2000);
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <h1 className="checkout__title">Datos de Facturación</h1>
        <FacturationUserForm />
      </div>
      <div className="checkout__right">
        <div className="checkout__summary">
          <OrderSummary />
        </div>
        <div className="checkout__payment">
          <PaymentMethod onFinishPayment={handleFinishPayment} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
