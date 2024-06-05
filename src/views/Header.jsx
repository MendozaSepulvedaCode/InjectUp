import { useEffect, useState } from "react";
import IaDev from "../assets/header-bg.webp";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import "../styles/header.css";
import { Element } from "react-scroll";

function Header() {
  const [mostrarBotonFlotante, setMostrarBotonFlotante] = useState(true);

  useEffect(() => {
    const manejoScroll = () => {
      const scrollY = window.scrollY;
      setMostrarBotonFlotante(scrollY === 0);
    };

    window.addEventListener("scroll", manejoScroll);

    return () => {
      window.removeEventListener("scroll", manejoScroll);
    };
  }, []);

  const manejoScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Element name="inicio">
      <div className="header-container">
        <img className="image-bg-header" src={IaDev} alt="" />
        <div className="content-header">
          <div className="content-header-title-class">
            <h1 className="header-class-website">
              --- Desarrollo de software y Tutorias ---
            </h1>
            <h2 className="title-header">
              La creatividad <br />
              encuentra su expresion <br />
              en forma de <span>Codigo</span>{" "}
              <BiCodeAlt className="icon-header-title" />
            </h2>
          </div>
          <div className="header-bottom">
            <p className="description-header">
              En el corazón de cada línea de código reside el potencial para el
              éxito digital. En nuestro estudio, no solo creamos software,
              construimos soluciones personalizadas que impulsan tu visión y
              brindamos tutorias personalizadas para que se adapten a tus
              necesidades.
            </p>
            <a className="btn-header">Contactanos</a>
            {mostrarBotonFlotante && (
              <button className="floating-button" onClick={manejoScrollDown}>
                <span>
                  <IoIosArrowDown />
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Header;
