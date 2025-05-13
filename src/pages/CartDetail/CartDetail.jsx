import React, { useState, useEffect } from "react";
import CartItemsList from "../../components/CartItemList/CartItemList";
import "./CartDetail.css";
import OrderResume from "../../components/OrderResume/OrderResume";
import { getAllBooks } from "../../utils/BookUtils";

function CartDetail() {
  //this must be received from the context
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
    <div className="shopping-cart-container">
      <h1>{title}</h1>
      <div className="cart-layout">
        <CartItemsList
          items={cartItems}
          onQuantityChange={handleQuantityChange}
          onRemoveItem={handleRemoveItem}
        />
        {cartItems.length > 0 && (
          <OrderResume
            totalPrice={totalPrice}
            items={cartItems} // Para mostrar los nombres en el resumen
            onConfirmPayment={handleConfirmPayment}
          />
        )}
      </div>
      {cartItems.length === 0 && <p>Tu carrito está vacío.</p>}
    </div>
  );
}

export default CartDetail;
