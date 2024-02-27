import React from "react";
import CardServicios from "./Servicios/CardServicios";

const Services = () => {
  return (
    <>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h1 className="section-heading text-uppercase">SERVICIOS</h1>
            <h3 className="section-subheading text-muted">
              PRACTICAS MILENARIAS DE ESPIRITISMO A TU COMPLETA DISPOSICIÓN.
            </h3>
          </div>
          <div className="row">
            <CardServicios />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
