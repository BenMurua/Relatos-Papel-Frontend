import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useCart } from "../../Hooks/Hooks";
const Layout = () => {
  const { isCartOpen, toggleCart } = useCart();

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
