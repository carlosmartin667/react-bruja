import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import foto from "./img/foto.jpg";
import Fundadora from "./img/personas/Fundadora.jpg";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
      <FloatingWhatsApp
        phoneNumber="+5493513897490"
        accountName="Samantha"
        avatar={Fundadora}
        statusMessage="activo"
        chatMessage="hola en que te puedo ayudar "
        placeholder="hola.."
      />
    </>
  );
};

export default App;
