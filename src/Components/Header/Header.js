import React from "react";
import "./Header.css";
// import vector1 from "./images/Vector1.svg";
// import vector2 from "./images/Vector2.svg";
import linkedin from "./images/linkedin-in-brands.svg";
import mail from "./images/envelope-regular.svg";
import cv from "./CVRocioMarquesin.pdf";

export default function Header() {
  return (
    <header className="header">
      {/* <section className="containerHeader"> */}
      <div className="containerNombre">
        <p>Rocio Marquesin</p>
      </div>
      <div className="containerAnchors">
        <p>
          <a href="#Home">Home</a>
        </p>
        <p>
          <a href="#Proyectos"> Proyectos</a>
        </p>
        <p>
          <a href="#Certificaciones"> Certificaciones</a>
        </p>
        <p>
          <a href="#Conocimientos"> Conocimientos</a>
        </p>
        <p>
          <a href="#Contactame"> Contacteme</a>
        </p>
      </div>
      {/* </section> */}
      <div className="containersVectorHeader">
        <a href="https://www.linkedin.com/in/rocio-marquesin-a97265217/">
          <img src={linkedin} alt="Icono Linkeding" className="icon" />
        </a>
        <a href="mailto:marquesinro@gmail.com">
          {" "}
          <img src={mail} alt="Icono Mail" className="icon" />
        </a>
        <a href={cv} download="CV_Marquesin_Rocio">
          <div className="buttonCVH">CV</div>
        </a>
        {/* <img src={vector1} alt="vector1" className="vector1" /> */}
        {/* <img src={vector2} alt="vector2" className="vector2" /> */}
      </div>
    </header>
  );
}
