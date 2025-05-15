import "./Footer.css";
import logo from "../../assets/LogoWhite.svg";
import email_logo from "../../assets/EmailWhite.svg";
import phone_logo from "../../assets/PhoneWhite.svg";
import location_logo from "../../assets/Location.svg";
import instagram_logo from "../../assets/Instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Relatos de papel logo" />
      <span className="footer__info">
        ©2025 Relatos de papel. Todos los derechos reservados.
      </span>
      <div className="footer__right">
        <div className="footer__contact">
          <img className="footer__icon" src={email_logo} alt="Email" />
          <a className="footer__text" href="mailto:relatosdepapel@gmail.com">
            relatosdepapel@gmail.com
          </a>
        </div>
        <div className="footer__contact">
          <img className="footer__icon" src={location_logo} alt="Ubicación" />
          <span className="footer__text">Madrid, Calle Inventada 123</span>
        </div>
        <div className="footer__contact">
          <img className="footer__icon" src={phone_logo} alt="Teléfono" />
          <span className="footer__text">+34 123 456 789</span>
        </div>
        <div className="footer__contact">
          <img className="footer__icon" src={instagram_logo} alt="Instagram" />
          <span className="footer__text">Relatos de papel</span>
        </div>
      </div>
    </footer>
  );
};
