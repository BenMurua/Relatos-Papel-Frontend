import { useState } from "react";

export const useCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = (newValue) => {
    if (newValue === undefined) {
      newValue = !isCartOpen;
    }
    setIsCartOpen(newValue);
  };

  return { isCartOpen, toggleCart };
};

export const useBookCardQuantity = () => {
  const [bookQuantity, setBookQuantity] = useState(0);

  const handleQuantityChange = (newQuantity) => {
    setBookQuantity(newQuantity);
  };

  return { bookQuantity, handleQuantityChange };
};
