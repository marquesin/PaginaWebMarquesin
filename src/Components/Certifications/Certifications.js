import React from "react";
import "./Certifications.css";
import vector5 from "./images/Vector5.svg";

export default function Certifications() {
  return (
    <section className="containerCertification">
      <CV />
      {/* <img src={vector5} alt="vector5" className="vector5" /> */}
      <div className="containerCertificacion">
        <h3 className="titleCertificacion">Certifición</h3>
        <div className="listaCertificaciones">
          <p className="itemListaCe">Desarrollo Front-End ACAMICA</p>
          <p className="itemListaCe">JAVASCRIPT EscuelaDevRock</p>
          <p className="itemListaCe">ReactJS EscuelaDevRock </p>
          <p className="itemListaCe">FireBase EscuelaDevRock</p>
          <p className="itemListaCe">Curso Linkedin</p>
        </div>
      </div>
    </section>
  );
}

export function CV() {
  return (
    <div className="containerCV">
      <h4 className="titleCV">Descarga mi hoja de vida!</h4>
      <button className="buttonCV">DescargarCVMarquesinRocio.pdf</button>
    </div>
  );
}
