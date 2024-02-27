import React from "react";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
const About = () => {
  return (
    <>
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <Rotate top left>
              <h1 className="section-heading text-uppercase">
                Somos Osiris centro esterico.
              </h1>
            </Rotate>
            <div className=" mb-3 mt-4">
              <p className="">
                Somos un conjunto de profesionales dedicados a la magia, desde
                el año 2002 estamos centrados en trabajar en conjunto con la
                magia y la libertad espiritual. Nuestra mision es poder ayudar a
                todas las personas con nuestros dones que fueron otorgados con
                el objetivo de solucionar problemas. Vamos a estar acompañando
                cada caso y cada persona para que todos puedan llevarse una
                solucion a corto plazo. Todos tus problemas de amor nosotros lo
                resolvemos, si necesitas que el o ella vuelva te podemos
                asegurar su retorno Tambien aplicamos magia en otros aspectos de
                la vida como problemas laborales, economicos, cargas energeticas
                y malos augurios
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
