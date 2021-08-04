import React from "react";
import "./Certifications.css";
import cv from "./images/CV_Marquesin_Rocio.pdf";
import acamica from "./images/acamica.png";
import escueladev from "./images/dev.png";
import certification from "./images/graduation-cap-solid.svg";
import learning from "./images/linkedinLearning.png";

export default function Certifications() {
  return (
    <section className="containerCertification" id="Certificaciones">
      <CV />
      <div className="containerCertificacion">
        <h3 className="titleCertificacion">
          Certificaciones
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
            />
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
