import "./Header.css";
import { useContext } from "react";

import logoLight from "../../assets/LogoWhite.svg";
import logoDark from "../../assets/LogoBlack.svg";
import cartLight from "../../assets/CartWhite.svg";
import cartDark from "../../assets/CartBlack.svg";

import { ThemeContext } from "../../context/themeContext";
import { THEMES } from "../../models/constants";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const logoSrc = theme === THEMES.LIGHT ? logoDark : logoLight;
  const cartSrc = theme === THEMES.LIGHT ? cartDark : cartLight;

  return (
    <header
      className={`header_bar ${
        theme === THEMES.DARK ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="logo-container">
        <img className="logo" src={logoSrc} alt="Logo" />
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
        <button
          className="theme-toggle"
          aria-label={`Cambiar a ${
            theme === THEMES.LIGHT ? "modo oscuro" : "modo claro"
          }`}
        >
          <img className="cart" src={cartSrc} alt="Cart" />
        </button>
      </div>
    </header>
  );
};

export default Header;
