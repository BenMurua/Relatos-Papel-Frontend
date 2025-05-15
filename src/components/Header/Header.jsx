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
      className={`header ${
        theme === THEMES.DARK ? "header--dark" : "header--light"
      }`}
    >
      <div className="header__logo">
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
        <button
          className="theme-toggle"
          aria-label={`Cambiar a ${
            theme === THEMES.LIGHT ? "modo oscuro" : "modo claro"
          }`}
        >
          <img className="header__cart" src={cartSrc} alt="Cart" />
        </button>
      </div>
    </header>
  );
};

export default Header;
