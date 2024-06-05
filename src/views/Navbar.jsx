import "../styles/navbar.css";
import { useState, useEffect } from "react";
import { Drawer, Button } from "antd";
import { BiAlignRight } from "react-icons/bi";
import LogoInJectUp from "../assets/LogoI.jpg";

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
              <ul>
                <li>
                  <a href="/">Inicio</a>
                </li>
                <li>
                  <a href="/">Servicios</a>
                </li>
                <li>
                  <a href="/">Sobre Nosotros</a>
                </li>
                <li>
                  <a href="/">Contactar</a>
                </li>
              </ul>
            </Drawer>
          </>
        ) : (
          <div className={`nav-elements ${openMenu && "active"}`}>
            <div className="links-nav">
              <ul>
                <li>
                  <a href="/">Inicio</a>
                </li>
                <li>
                  <a href="/">Servicios</a>
                </li>
                <li>
                  <a href="/">Sobre Nosotros</a>
                </li>
              </ul>
            </div>
            <div className="social-nav">
              <ul>
                <li>
                  <a href="/">Contactar</a>
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
