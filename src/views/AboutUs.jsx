import "../styles/about.css";
import softwareImage from "../assets/header-about-us.jpg";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Element } from "react-scroll";

function AboutUs() {
  return (
    <Element name="about">
      <div className="about-us-container">
        <div className="header-about-us">
          <h5>Sobre Nosotros </h5>
          <BsFillQuestionCircleFill />
        </div>
        <p className="about-description">
          En InjectUp, nos enfocamos en brindar soluciones de la mas alta
          calidad, asi mismo, ofrecemos clases personalizadas sobre las
          distintas ramas del desarrollo.
        </p>
        <div
          className="services-section"
          style={{
            backgroundImage: `url(${softwareImage})`,
          }}
        ></div>
        <div className="contact-section">
          <p>
            Además de nuestras tutorías personalizadas, brindamos clases en
            línea diseñadas para ofrecerte flexibilidad y acceso a conocimiento
            de calidad desde cualquier lugar.
          </p>
          <h4>
            Nos dedicamos a potenciar negocios y personas, transformando ideas
            en soluciones digitales innovadoras.
          </h4>
        </div>
      </div>
    </Element>
  );
}

export default AboutUs;
