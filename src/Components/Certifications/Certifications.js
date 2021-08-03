import React from "react";
import "./Certifications.css";
import vector5 from "./images/Vector5.svg";
import cv from "./CV_Marquesin_Rocio.pdf";
import acamica from "./images/acamica.png";
import escueladev from "./images/escuelaDevR.png";
import certification from "./images/graduation-cap-solid.svg";
import learning from "./images/linkedin-learning.png";

export default function Certifications() {
  return (
    <section className="containerCertification" id="Certificaciones">
      <CV />
      {/* <img src={vector5} alt="vector5" className="vector5" /> */}
      <div className="containerCertificacion">
        <h3 className="titleCertificacion">
          Certificación
          <img
            src={certification}
            alt="Logo Certification"
            className="iconCertificacionesG"
          />
        </h3>
        <div className="listaCertificaciones">
          <p className="itemListaCe">
            <img
              src={acamica}
              alt="Logo Acamica"
              className="iconCertificaciones"
            />
            Desarrollo Front-End ACAMICA
          </p>
          <p className="itemListaCe">
            <img
              src={escueladev}
              alt="Logo Escuela Dev Rock"
              className="iconCertificaciones"
            />
            JAVASCRIPT EscuelaDevRock
          </p>
          <p className="itemListaCe">
            <img
              src={escueladev}
              alt="Logo Escuela Dev Rock"
              className="iconCertificaciones"
            />{" "}
            ReactJS EscuelaDevRock{" "}
          </p>
          <p className="itemListaCe">
            <img
              src={escueladev}
              alt="Logo Escuela Dev Rock"
              className="iconCertificaciones"
            />{" "}
            FireBase EscuelaDevRock
          </p>
          <p className="itemListaCe">
            <img
              src={learning}
              alt="Logo Learning"
              className="iconCertificaciones"
            />{" "}
            Curso Linkedin
          </p>
        </div>
      </div>
    </section>
  );
}

export function CV() {
  return (
    <div className="containerCV">
      <h4 className="titleCV">Descarga mi hoja de vida!</h4>
      <a href={cv} download="CV_Marquesin_Rocio">
        <button className="buttonCV">Descargar CV_Marquesin_Rocio.pdf</button>
      </a>
    </div>
  );
}
