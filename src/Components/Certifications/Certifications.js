import React from "react";
import "./Certifications.css";
import vector5 from "./images/Vector5.svg";

export default function Certifications() {
  return (
    <section className="containerCertification">
      <CV />
      <img src={vector5} alt="vector5" className="vector5" />
      <h3>Certifición</h3>
      <div className="listaCertificaciones">
        <ul>
          <li className="itemListaCe">Desarrollo Front-End ACAMICA</li>
          <li className="itemListaCe">JAVASCRIPT EscuelaDevRock</li>
          <li className="itemListaCe">ReactJS EscuelaDevRock </li>
          <li className="itemListaCe">FireBase EscuelaDevRock</li>
          <li className="itemListaCe">Curso Linkedin</li>
        </ul>
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
