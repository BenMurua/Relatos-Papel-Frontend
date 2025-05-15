import React, { useState } from "react";
import CartItemsList from "../../components/CartItemList/CartItemList";
import "./CartDetail.css";
import OrderResume from "../../components/OrderResume/OrderResume";
import { getAllBooks } from "../../utils/BookUtils";

function CartDetail() {
  const initialItems = getAllBooks();
  const [cartItems, setCartItems] = useState(initialItems);
  const title = "Resumen del carrito";

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const totalPrice = calculateTotalPrice();

  const handleConfirmPayment = () => {
    alert(`Procediendo al pago. Total: ${totalPrice}€`);
  };

  return (
    <div className="cart-detail">
      <h1>{title}</h1>
      <div className="cart-detail__layout">
        <CartItemsList
          items={cartItems}
          onQuantityChange={handleQuantityChange}
          onRemoveItem={handleRemoveItem}
        />
        {cartItems.length > 0 && (
          <OrderResume
            totalPrice={totalPrice}
            items={cartItems}
            onConfirmPayment={handleConfirmPayment}
          />
        )}
      </div>
      {cartItems.length === 0 && <p>Tu carrito está vacío.</p>}
    </div>
  );
}

export default CartDetail;
