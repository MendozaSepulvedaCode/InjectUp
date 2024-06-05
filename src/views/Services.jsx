import { useEffect, useState } from "react";
import "../styles/services.css";
import webDevelopment from "../assets/web-development.png";
import appDevelopment from "../assets/app-development.png";
import softwareDevelopment from "../assets/software-development.png";
import { Element } from "react-scroll";

function Services() {
  const [palabraActual, setPalabraActual] = useState(0);
  const palabras = ["Nuestros", "servicios", "populares"];

  const mayusPrimeraLetra = (palabra) => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
  };

  const services = [
    {
      imagen: webDevelopment,
      titulo: "Diseño y desarrollo web",
      descripcion:
        "Destaca en línea con nuestro servicio de desarrollo web. Creamos sitios únicos que potencian tu presencia digital. Desde la concepción hasta el lanzamiento, te ofrecemos soluciones web efectivas y memorables.",
    },
    {
      imagen: appDevelopment,
      titulo: "Desarrollo de aplicaciones",
      descripcion:
        "Damos vida a tus conceptos con aplicaciones móviles impactantes. Enfocados en la excelencia, creamos soluciones de desarrollo móvil que destacan y brindamos vida a tus ideas.",
    },
    {
      imagen: softwareDevelopment,
      titulo: "Tutorias personalizadas",
      descripcion:
        "Ofrecemos tutorías personalizadas que se adaptan a tus necesidades y objetivos específicos. Desde la comprensión de conceptos básicos hasta el dominio de técnicas avanzadas.",
    },
  ];

  useEffect(() => {
    const intervaloValido = setInterval(() => {
      setPalabraActual((prevIndex) => (prevIndex + 1) % palabras.length);
    }, 3000);

    return () => clearInterval(intervaloValido);
  }, []);

  return (
    <Element name="servicios">
      <div className="services-container">
        <div className="services-title">
          <h5>
            {palabras.map((palabra, index) => (
              <span
                key={index}
                className={
                  index === palabraActual ? "palabra-seleccionada" : ""
                }
              >
                {index === palabraActual ? mayusPrimeraLetra(palabra) : palabra}
              </span>
            ))}
          </h5>
        </div>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <img src={service.imagen} alt={service.titulo} />
              <h6>{service.titulo}</h6>
              <p>{service.descripcion}</p>
              <button className="button-services" href="https://www.instagram.com/ezzx_18/">
                Cotizar
              </button>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Services;
