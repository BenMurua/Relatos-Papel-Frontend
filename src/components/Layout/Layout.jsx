import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useState } from "react";
const Layout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = (newValue) => {
    if (newValue === undefined) {
      newValue = !isCartOpen;
    }
    setIsCartOpen(newValue);
  };

  return (
    <>
      <Header isCartOpen={isCartOpen} onCartToggle={toggleCart} />
      <main>
        <Outlet context={{ toggleCart }} />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
