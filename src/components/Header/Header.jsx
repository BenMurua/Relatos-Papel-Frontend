import "./Header.css";
import { useContext } from "react";

// Logos y carritos según el tema
import logoLight from "../../assets/LogoWhite.svg"; // Logo para modo claro
import logoDark from "../../assets/LogoBlack.svg"; // Logo para modo oscuro
import cartLight from "../../assets/CartWhite.svg"; // Carrito para modo claro
import cartDark from "../../assets/CartBlack.svg"; // Carrito para modo oscuro

import { ThemeContext } from "../../context/themeContext";
import { THEMES } from "../../models/constants";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Elegir el logo y el carrito según el tema
  const logoSrc = theme === THEMES.LIGHT ? logoDark : logoLight;
  const cartSrc = theme === THEMES.LIGHT ? cartDark : cartLight;

  return (
    <header
      className={`header_bar ${
        theme === THEMES.DARK ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="logo-container">
        <img className="logo" src={logoSrc} alt="Logo" /> {/* Logo dinámico */}
        <span className="logo-text">Relatos de papel</span>
      </div>

      <div className="cart-container">
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={`Cambiar a ${
            theme === THEMES.LIGHT ? "modo oscuro" : "modo claro"
          }`}
        >
          <span className="material-symbols-outlined">contrast</span>
        </button>
        <img className="cart" src={cartSrc} alt="Cart" />
      </div>
    </header>
  );
};

export default Header;
