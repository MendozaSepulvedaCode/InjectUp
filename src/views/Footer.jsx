import Logo from "../assets/LogoI.jpg";
import "../styles/footer.css";
import {
  BiLogoTiktok,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="cnt-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={Logo} alt="InjectUp" className="inject-logo-blanco" />
            <h4>InjectUp</h4>
            <p>
              Somos una startup en crecimiento, enfocandonos en versatilidad,
              eficiencia y buena atencion al cliente. Nuestro proposito es ser
              el estudio lider en creacion y tutorias de software en
              latinoamerica.
            </p>
            <div className="cnt-icono-footer">
              <BiLogoFacebook />
              <BiLogoInstagram />
              <BiLogoLinkedin />
              <BiLogoTiktok />
              <BiLogoYoutube />
            </div>
          </div>

          <div className="footer-contact">
            <h4>Servicios de desarrollo</h4>
            <p>Diseño y desarrollo web</p>
            <p>Desarrollo de aplicaciones moviles</p>
            <p>Desarrollo de software especializado</p>

            <h4>Clases personalizadas</h4>
            <p>Disponibilidad a la medida del estudiante</p>
            <p>Clases adaptas a necesidad especifica</p>
          </div>

          <div className="footer-info">
            <h4>Contacto</h4>
            <p>
              Para cualquier duda o interes en conocer mas y cotizar sobre
              desarrollo de software o tutorias personalizadas, oprime el boton
              de aca.
            </p>
            <button className="btn-contacto-footer">Contactanos</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
