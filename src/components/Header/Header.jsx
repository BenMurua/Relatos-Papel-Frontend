import "./Header.css";
import logo from "../../../public/Logo_white.svg";
import cart from "../../../public/cart_white.svg";

const Header = () => {
  return (
    <header className="header_bar">
      <div className="logo_nombre">
        <img className="logo" src={logo} />
        <span>Relatos de papel</span>
      </div>
      <img className="cart" src={cart} />
    </header>
  );
};

export default Header;
