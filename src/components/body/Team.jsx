import React from "react";
import Fundadora from "../../img/personas/Fundadora.jpg";
const Team = () => {
  return (
    <>
      {" "}
      {/* Team*/}
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">FUNDADORA</h2>
          </div>
          <div className="row">
            <div className="col mt-4">
              <div className="team-member">
                <img
                  className="rounded-circle"
                  src={Fundadora}
                  alt="Lic. Samantha"
                />
                <h4>Lic. Samantha</h4>
                <p className="text-muted mt-4">Atilio</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Soy Samatha, una hechicera apasionada y dedicada a tejer magia
                en la vida de aquellos que buscan transformación. Mi arte
                incluye hechizos personalizados, limpiezas energéticas y
                rituales que desbloquean nuevos caminos. Con orientación
                mística, celebro momentos significativos y ofrezco un refugio
                mágico para quienes buscan amor, renovación y éxito.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
