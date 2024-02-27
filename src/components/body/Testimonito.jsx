import React from "react";
import CardTestimonio from "./testimonio/CardTestimonio";
import Modaltestimonio from "./testimonio/Modaltestimonio";

const Testimonito = () => {
  return (
    <>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">TESTIMONIO</h2>
          </div>
          <div className="row">
            <CardTestimonio />
          </div>
        </div>
      </section>

      <Modaltestimonio />
    </>
  );
};

export default Testimonito;
