import React from "react";
import "./Header.css";
// import vector1 from "./images/Vector1.svg";
// import vector2 from "./images/Vector2.svg";
import linkedin from "./images/linkedin-in-brands.svg";
import mail from "./images/envelope-regular.svg";

export default function Header() {
  return (
    <header className="header">
      {/* <section className="containerHeader"> */}
      <div className="containerNombre">
        <p>Rocio Marquesin</p>
      </div>
      <div className="containerAnchors">
        <p> Home</p>
        <p>Proyectos</p>
        <p>Certificaciones</p>
        <p>Conocimientos</p>
        <p>Contacteme</p>
      </div>
      {/* </section> */}
      <div className="containersVectorHeader">
        <img src={linkedin} alt="Icono Linkeding" className="icon" />
        <img src={mail} alt="Icono Mail" className="icon" />
        <div className="buttonCVH">CV</div>
        {/* <img src={vector1} alt="vector1" className="vector1" /> */}
        {/* <img src={vector2} alt="vector2" className="vector2" /> */}
      </div>
    </header>
  );
}
