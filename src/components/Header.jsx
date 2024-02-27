import React from "react";
import Rotate from "react-reveal/Rotate";
const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <a>INICIO</a>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  SERVICIOS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  TESTIMONIO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  acerca de
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Fundadora
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  CONTACTO
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container">
          <div className="row">
            <div className="">
              <Rotate top left cascade>
                <div className="badge bg-dark   text-warning">
                  <h1 className="">Osiris Centro Esoterico</h1>
                </div>
              </Rotate>
            </div>
            <div className="col">
              <a
                className="btn btn-success btn-xl text-uppercase mt-4"
                href="https://wa.me/5493513897490"
                target="_blank"
              >
                whatsapp
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
