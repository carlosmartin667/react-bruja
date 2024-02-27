import React from 'react'
import testiminioServicio from "../../../data/testiminioServicio.json";
import img1 from "../../../img/testimonio/testimonio1.jpg";
import img2 from "../../../img/testimonio/testimonio2.jpg";
import img3 from "../../../img/testimonio/testimonio3.jpg";
import img4 from "../../../img/testimonio/testimonio4.jpg";
const Modaltestimonio = () => {
      const imganes = [img1, img2, img3, img4];
  return (
    <>
      {testiminioServicio.map((item) => (
        <div
          className="portfolio-modal modal fade"
          id={item.idModal}
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
          key={item.id}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal">
                <img src="assets/img/close-icon.svg" alt="Close modal" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">{item.titulo}</h2>
                      <p className="item-intro text-muted">{item.subtitulo}</p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src={imganes[item.id]}
                        alt="..."
                      />
                      <p>{item.descripcion}</p>
                      <ul className="list-inline">
                        <li>
                          <strong>Client: </strong>
                           {item.Client}
                        </li>
                        <li>
                          <strong>Category: </strong>
                          {item.Category}
                        </li>
                      </ul>
                      <button
                        className="btn btn-primary btn-xl text-uppercase"
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-xmark me-1" />
                        cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Modaltestimonio