import React from "react";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section className="containerCertification">
      <CV />
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
      <h4>Descarga mi hoja de vida!</h4>
      <button>DescargarCVMarquesinRocio.pdf</button>
    </div>
  );
}
