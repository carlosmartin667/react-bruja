import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
const Contacto = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      user_name: "",
      user_email: "",
      message:"",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    sendEmail(data);
    reset({
      user_name: "",
      user_email: "",
      message: "",
    });
    reset();
  });

  const form = useRef();

  const sendEmail = (e) => {

    emailjs
      .sendForm(
        "service_f10athe",
        "template_51s9ygw",
        form.current,
        "fqKzebu9YWIjn7Ur0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              Contactanos via correo
            </h2>
          </div>
          <form
            id="contactForm"
            data-sb-form-api-token="API_TOKEN"
            ref={form}
            onSubmit={onSubmit}
          >
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    id="user_name"
                    type="text"
                    name="user_name"
                    placeholder="Nombre *"
                    {...register("user_name", {
                      required: {
                        value: true,
                        message: "Nombre es requerido",
                      },
                      maxLength: 20,
                      minLength: 2,
                    })}
                  />
                  {errors.user_name?.type === "required" && (
                    <span className="text-danger">Nombre requerido</span>
                  )}
                  {errors.user_name?.type === "maxLength" && (
                    <span className="text-danger">
                      Nombre no debe ser mayor a 20 caracteres
                    </span>
                  )}
                  {errors.user_name?.type === "minLength" && (
                    <span className="text-danger">
                      Nombre debe ser mayor a 2 caracteres
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    name="user_email"
                    placeholder="Correo *"
                    {...register("user_email", {
                      required: {
                        value: true,
                        message: "Correo es requerido",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Correo no válido",
                      },
                    })}
                  />
                  {errors.user_email && (
                    <span className="text-danger">
                      {errors.user_email.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    placeholder="Mensaje*"
                    defaultValue={""}
                    {...register("message", {
                      required: {
                        value: true,
                        message: "Mensaje es requerido",
                      },
                      maxLength: 300,
                      minLength: 2,
                    })}
                  />
                  {errors.message?.type === "required" && (
                    <span className="text-danger">mensaje requerido</span>
                  )}
                  {errors.message?.type === "maxLength" && (
                    <span className="text-danger">
                      Mensaje no debe ser mayor a 300 caracteres
                    </span>
                  )}
                  {errors.message?.type === "minLength" && (
                    <span className="text-danger">
                      Mensaje debe ser mayor a 2 caracteres
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                className="btn btn-primary btn-xl text-uppercase "
                id="submitButton"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contacto;
