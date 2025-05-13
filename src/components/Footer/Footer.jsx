import "./Footer.css";
import logo from "../../assets/LogoWhite.svg";
import email_logo from "../../assets/EmailWhite.svg";
import phone_logo from "../../assets/PhoneWhite.svg";
import location_logo from "../../assets/Location.svg";
import instagram_logo from "../../assets/Instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer__main">
      <img className="logo" src={logo} />
      <span> @2025 Relatos de papel All Rights Reserved. </span>
      <div className="footer__right">
        <div>
          <img className="small__logo" src={email_logo} />
          <a className="label" href="mailto:relatosdepapel@gmail.com">
            relatosdepapel@gmail.com
          </a>
        </div>
        <div>
          <img className="small__logo" src={location_logo} />
          <span className="label"> Madrid, Calle Inventada 123</span>
        </div>
        <div>
          <img className="small__logo" src={phone_logo} />
          <span className="label"> +34 123 456 789</span>
        </div>
        <div>
          <img className="small__logo" src={instagram_logo} />
          <span className="label"> Relatos de papel</span>
        </div>
      </div>
    </footer>
  );
};
