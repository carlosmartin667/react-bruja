import React from "react";
import amorImposible from "../../../img/servicios/amoresImposible.jpg";
import amarresAmor from "../../../img/servicios/amarresCaseros.jpg";
import TarotLectura from "../../../img/servicios/TarotLectura.jpg";
import Sanacion from "../../../img/servicios/Sanacion.jpg";
import data from "../../../data/infoServicios.json";
import "../../../styles/estilo.css"
const CardServicios = () => {
  const imganes = [amarresAmor, amorImposible, TarotLectura, Sanacion];

  return (
    <>
      {data.map((item) => (
        <div
          className="col-lg-3 col-sm-6 mb-4 mt-4   text-bg-secondary"
          key={item.id}
          m
        >
          <div className="portfolio-item  ">
            <img
              className="img-fluid"
              src={imganes[item.id]}
         
            />

            <div className="portfolio-caption  text-bg-secondary">
              <div className="portfolio-caption-heading text-bg-secondary">
                {item.titulo}
              </div>
              <div className="portfolio-caption-subhead ing  ">
                {item.descripcion}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardServicios;
