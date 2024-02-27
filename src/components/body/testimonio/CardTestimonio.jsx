import React from "react";
import testiminioServicio from "../../../data/testiminioServicio.json";
import img1 from "../../../img/testimonio/testimonio1.jpg";
import img2 from "../../../img/testimonio/testimonio2.jpg";
import img3 from "../../../img/testimonio/testimonio3.jpg";
import img4 from "../../../img/testimonio/testimonio4.jpg";

const CardTestimonio = () => {
  const imganes = [img1, img2, img3, img4];

  return (
    <>
      {testiminioServicio.map((item) => (
        <div className="col-lg-4 col-sm-6 mb-4" key={item.id}>
          {/* Portfolio item 1*/}
          <div className="portfolio-item">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href={"#" + item.idModal}
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fas fa-plus fa-3x" />
                </div>
              </div>
              <img
                className="img-fluid"
                src={imganes[item.id]}
                height="100"
                alt="..."
              />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">{item.titulo}</div>
              <div className="portfolio-caption-subheading text-muted">
                {item.subtitulo}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardTestimonio;
