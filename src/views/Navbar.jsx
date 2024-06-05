import "../styles/navbar.css";
import { useState, useEffect } from "react";
import { Drawer, Button } from "antd";
import { BiAlignRight } from "react-icons/bi";
import LogoInJectUp from "../assets/LogoI.jpg";
import { Link } from "react-scroll";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const manejoDrawer = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="navbar">
      <div className="container-nav">
        <div className="logo">
          <img src={LogoInJectUp} className="logo-size" alt="injectup" />
          <h5>
            Inject<span>Up</span>
          </h5>
        </div>
        {isMobile ? (
          <>
            <div className="menu-icon" onClick={manejoDrawer}>
              <BiAlignRight className="icon-nav" />
            </div>
            <Drawer
              title="InjectUp"
              placement="right"
              closable={true}
              onClose={manejoDrawer}
              open={openMenu}
              width={240}
            >
              <ul className="list-drawer">
                <Link
                  activeClass="active"
                  to="inicio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Inicio
                </Link>
                <Link
                  activeClass="active"
                  to="servicios"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Servicios
                </Link>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Sobre Nosotros
                </Link>
                <div className="social-nav">
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/ezzx_18/">Contactar</a>
                    </li>
                  </ul>
                </div>
              </ul>
            </Drawer>
          </>
        ) : (
          <div className={`nav-elements ${openMenu && "active"}`}>
            <div className="links-nav">
              <ul>
                <Link
                  activeClass="active"
                  to="inicio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Inicio
                </Link>
                <Link
                  activeClass="active"
                  to="servicios"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Servicios
                </Link>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Sobre Nosotros
                </Link>
              </ul>
            </div>
            <div className="social-nav">
              <ul>
                <li>
                  <a href="https://www.instagram.com/ezzx_18/">Contactar</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
