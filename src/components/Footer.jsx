import React, { useState } from 'react'
import { MagicMotion } from "react-magic-motion";
const Footer = () => {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <footer className="footer py-4">
        <div className="container">
          <div className="col-xl-12 col-lg-12 col-sm-12 about-widget">
            <p className="mt-4">
              IMPORTANTE!: ESTE SITIO VA DIRIGIDO EXCLUSIVAMENTE PARA MAYORES DE
              18 AÑOS
            </p>
            <MagicMotion
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
                mass: 1.1,
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(238, 238, 238)",
                  padding: "1rem",
                  borderRadius: 12,
                  margin: "1rem 0",
                  overflow: "hidden",
                }}
              >
                <button
                  style={{
                    fontSize: "1.1em",
                    fontWeight: 500,
                    width: "100%",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  TERMINOS Y CONDICIONES
                  <svg
                    key="exclude"
                    style={{
                      transform: `rotate(${isOpen ? 180 : 0}deg)`,
                      transition: "320ms ease-in-out",
                    }}
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 10L15.6714 21L27.5 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div
                    style={{
                      gap: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "1rem",
                    }}
                  >
                    <p className="mt-4">
                      De acuerdo con las legislaciones vigentes, se establece
                      que las predicciones, videncias psíquicas, lecturas de
                      cartas y hechizos tienen fines de entretenimiento y ayuda
                      personal. Estos servicios no sustituirán la debida
                      atención médica, legal, financiera, psicológica y
                      psiquiátrica. Todas las personas son diferentes, por tanto
                      los resultados pueden variar de una persona a otra. Los
                      resultados ante cada caso son probables y no existe
                      evidencia científica o eficacia de los mismos. ☆ De
                      acuerdo con las legislaciones vigentes, se establece que:
                      Las predicciones, videncias psíquicas, lecturas de cartas
                      y hechizos tienen fines de entretenimiento de personas
                      adultas mayores de edad y con facultades mentales para
                      entender que en ningún caso se sustituirá las debidas
                      atenciones médicas, psicológicas, psiquiátricas,
                      financiera, legal o jurídica que pueda requerir en
                      cualquier caso. ☆ Al navegar en este sitio web el
                      visitante declara que está de acuerdo con nuestros
                      términos, políticas, y servicios prestados. ☆La solicitud
                      de nuestros servicios se realiza por voluntad propia del
                      visitante teniendo en cuenta las legislaciones vigentes,
                      al igual que el suministro de la información ya que los
                      datos acá solicitados se entregan de manera voluntaria y
                      solo serán usados para la consulta o necesidad específica
                      del usuario, en caso de que usted desee reservar su nombre
                      puede sustituirlo por un seudónimo. ☆ Por ningún motivo
                      este sitio web solicitará información personal como
                      financiera, religiosa, tarjetas de crédito, privada ni
                      números de identificación. ☆ Los resultados de nuestros
                      servicios pueden variar de una persona a otra teniendo en
                      cuenta que cada persona es única y cada caso diferente
                      puede obtener un gran cambio en su vida, como también no
                      obtener el resultado no deseado. ☆ Nosotros asesoramos,
                      ayudamos, motivamos, animamos a seguir pese a las
                      dificultades o problemas de cada individuo y queda
                      expresamente prohibido la utilización de este sitio web o
                      cualquiera de sus servicios con fines o efectos ilícitos,
                      contrarios a la buena fe, al orden público o a lo
                      establecido con las condiciones de uso. ☆ en ningún caso y
                      bajo ninguna circunstancia vendemos ni compartimos ningún
                      tipo de información, siendo que es totalmente
                      confidencial. ☆ ACERCA DE LOS COSTOS Y PAGOS POR
                      SERVICIOS. ☆Toda llamada o mensaje a nuestros números de
                      contacto puede acarrear costos de acuerdo a su compañía
                      telefónica. ☆El uso de nuestros formularios de contacto o
                      chat en línea no tienen ningún costo. ☆ La consulta no
                      tiene ningún costo, si después de realizada la consulta
                      usted desea tomar algún servicio con nosotros está en el
                      derecho de pedir toda la información que considere
                      necesaria al mismo tiempo que acepta el costo del servicio
                      de manera libre y consciente y está de acuerdo con el
                      trabajo y las prácticas del mismo. ☆ Los precios varían
                      según la necesidad y el proceso realizado, va desde los $
                      100 pesos hasta $ 30.000 los costos se utilizarán para los
                      materiales del servicio solicitado por la persona y cada
                      persona está en libre decisión de aceptar o no los costos
                      del mismo. ☆ ACERCA DE LA GARANTÍA DE NUESTROS SERVICIOS.
                      ☆ Los resultados ante cada caso son probables y no hay
                      certeza alguna a de que ocurran, quien consulte nuestra
                      página web entenderá que no existe evidencia científica o
                      eficacia de los mismos ☆ El uso de uno o varios de
                      nuestros servicios ofrecidos en este sitio web queda a
                      consideración del usuario si acepta el servicio ofrecido
                      estará sujeta a su propia interpretación y uso. ☆ Al
                      solicitar una consulta usted está aceptando que es mayor
                      de edad y que el único costo de la consulta es el que
                      aplica en según el acuerdo al su operador de telefonía. ☆
                      Si por alguna razón usted no está de satisfecho con su
                      experiencia con nosotros no dude en ponerse en contacto
                      con nosotros y con gusto le atenderemos para darle
                      prioridad a sus dudas e inquietudes. ☆ POLÍTICAS DE
                      REEMBOLSO Y DEVOLUCIÓN. ◙ Una vez terminado el servicio
                      usted podrá contactarnos e informarnos sobre su
                      experiencia y satisfacción.
                    </p>
                  </div>
                )}
              </div>
            </MagicMotion>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">
              Copyright © Your Website 2024
            </div>
            <div className="col-lg-4 my-3 my-lg-0"></div>
            <div className="col-lg-4 text-lg-end"></div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer