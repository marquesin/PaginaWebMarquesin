import React from "react";
import "./Home.css";
import vector3 from "./images/Vector3.svg";
import vector4 from "./images/Vector4.svg";

export default function Home() {
  return (
    <section className="home" id="Home">
      <div className="containerPresentacion">
        <h1 className="titleHome">Hola! Yo soy Rocio</h1>
        <p className="parraHome">
          I’m a 3rd year Renaissance Engineering Programme stdudent enrolled in
          Nanyang Technological University, Singapore. I’ve always had a keen
          interest in design related things. I am interested in a career in UI
          /UX . I hope to be able to create meaningful people centric designs.
        </p>
        <div className="linkContactoHome">
          <div className="iconCont">C1</div>
          <div className="iconCont">C2</div>
          <div className="iconCont">C3</div>
        </div>
      </div>
      {/* <div className="containerVectorHome"> */}
      {/* <img src={vector4} alt="Vector4" className="vector4" /> */}
      {/* <img src={vector3} alt="Vector3" className="vector3" /> */}
      {/* </div> */}
      <div className="containerFoto">
        <h2>foto</h2>
      </div>
    </section>
  );
}
