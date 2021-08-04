import React from "react";
import "./Home.css";
import vector3 from "./images/Vector3.svg";
import vector4 from "./images/Vector4.svg";
import gif from "./images/gifHome.gif";
// import gif1 from "./images/Diseno.gif";

export default function Home() {
  return (
    <section className="home" id="Home">
      <div className="containerPresentacion">
        <h1 className="titleHome">Hola! Yo soy Rocio</h1>
        <p className="parraHome">
          Soy Rocio y soy desarrolladora Front End. Siempre me gustó la
          tecnología y desde que me metí en este mundo no dejo de aprender cosas
          nuevas. Mis principales habilidades son HTML, CSS, JavaScript y React.
          Considero también que tengo muy buenas habilidades blandas para sumar
          al equipo. Quiero seguir creciendo y ganar experiencia para
          desarrollar mi carrera en este gran universo.
        </p>
        {/* <div className="linkContactoHome">
          <div className="iconCont">c1</div>
          <div className="iconCont">C2</div>
          <div className="iconCont">C3</div>
        </div> */}
      </div>
      {/* <div className="containerVectorHome"> */}
      {/* <img src={vector4} alt="Vector4" className="vector4" /> */}
      {/* <img src={vector3} alt="Vector3" className="vector3" /> */}
      {/* </div> */}
      <div className="containerFoto">
        <img src={gif} alt="Gif tecnologias" className="gif" />
      </div>
    </section>
  );
}
