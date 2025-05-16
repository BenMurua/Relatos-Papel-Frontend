import "./Header.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoLight from "../../assets/LogoWhite.svg";
import logoDark from "../../assets/LogoBlack.svg";
import cartLight from "../../assets/CartWhite.svg";
import cartDark from "../../assets/CartBlack.svg";
import { ThemeContext } from "../../context/themeContext";
import { BookCardContext } from "../../context/bookCardContext";
import { THEMES } from "../../models/constants";
import CartPopup from "../CartPopup/CartPopup";
import { RoutesValues } from "../../models/RoutesValues";

const Header = ({ isCartOpen, onCartToggle }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { deleteBook } = useContext(BookCardContext);
  const navigate = useNavigate();

  const logoSrc = theme === THEMES.LIGHT ? logoDark : logoLight;
  const cartSrc = theme === THEMES.LIGHT ? cartDark : cartLight;

  const handleLogoClick = () => {
    navigate(RoutesValues.app);
  };

  const handleDelete = (id) => {
    deleteBook(id);
  };

  return (
    <header
      className={`header ${
        theme === THEMES.DARK ? "header--dark" : "header--light"
      }`}
    >
      <div
        className="header__logo"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      >
        <img className="header__logo-image" src={logoSrc} alt="Logo" />
        <span className="header__logo-text">Relatos de papel</span>
      </div>

      <div className="header__actions">
        <button
          onClick={toggleTheme}
          className="header__theme-toggle"
          aria-label={`Cambiar a ${
            theme === THEMES.LIGHT ? "modo oscuro" : "modo claro"
          }`}
        >
          <span className="material-symbols-outlined">contrast</span>
        </button>

        <div className="header__cart-wrapper">
          <button
            onClick={() => {
              onCartToggle();
            }}
            className="theme-toggle"
            aria-label="Abrir carrito"
          >
            <img className="header__cart" src={cartSrc} alt="Cart" />
          </button>

          {isCartOpen && (
            <CartPopup
              handleDelete={handleDelete}
              handleCartToggle={onCartToggle}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
