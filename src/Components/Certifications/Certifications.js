import React from "react";
import "./Certifications.css";
import cv from "./images/CurriculumVitaeMarquesinRocio.pdf";
import acamica from "./images/acamica.png";
import escueladev from "./images/dev.png";
import certification from "./images/graduation-cap-solid.svg";
import learning from "./images/linkedinLearning.png";
import iconCertificado from "./images/file-pdf-solid.svg";
import cAcamica from "./Certificaciones/Certificación DWFE Rocio Melina Marquesin.pdf";
import cDevJS from "./Certificaciones/DevRockCertificajs .pdf";
import CDevRJS from "./Certificaciones/DevRockCertifica-react.pdf";
import CMySQL from "./Certificaciones/CertificadoDeFinalizacion_MySQL esencial.pdf";
import cDevFirebase from "./Certificaciones/DevRockCertifica-firebase.pdf";
import cFundamentos from "./Certificaciones/CertificadoDeFinalizacion_Fundamentos del desarrollo web Full Stack o Frontend.pdf"
import cScrum from "./Certificaciones/CertificadoDeFinalizacion_Aprende SCRUM.pdf"
import cGitHub from "./Certificaciones/CertificadoDeFinalizacion_GitHub para programadores.pdf"



export default function Certifications() {
  return (
    <section className="containerCertification" id="Certificaciones">
      <CV />
      <div className="containerCertificacion">
        <h3 className="titleCertificacion">
          <img
            src={certification}
            alt="Logo Certification"
            className="iconCertificacionesG"
          />
          Certificaciones
        </h3>
        <div className="listaCertificaciones">
          <p className="itemListaCe">
            <img
              src={acamica}
              alt="Logo Acamica"
              className="iconCertificaciones"
            />
            <div className="liCursos">
            <div className="itemCurso">
            Desarrollo Front-End ACAMICA
            <a href={cAcamica} target="_blank">
              <img
                src={iconCertificado}
                alt="Icono de certificado"
                className="certificados"
              />
            </a>
            </div>
            </div>
          </p>

          <p className="itemListaCe">
            <img
              src={escueladev}
              alt="Logo Escuela Dev Rock"
              className="iconCertificaciones"
            />
            <div className="liCursos">
            <div className="itemCurso">
            JAVASCRIPT EscuelaDevRock
            <a href={cDevJS} target="_blank">
              <img
                src={iconCertificado}
                alt="Icono de certificado"
                className="certificados"
              />
            </a>
            </div>
            <div className="itemCurso">
            ReactJS EscuelaDevRock
            <a href={CDevRJS} target="_blank">
              <img
                src={iconCertificado}
                alt="Icono de certificado"
                className="certificados"
              />
            </a>
            </div>
            <div className="itemCurso">
            FireBase EscuelaDevRock
            <a href={cDevFirebase} target="_blank">
              <img
                src={iconCertificado}
                alt="Icono de certificado"
                className="certificados"
              />
            </a>
            </div>
            </div>
          </p>
          <p className="itemListaCe">
            <img
              src={learning}
              alt="Logo Learning"
              className="iconCertificaciones"
            />
            <div className="liCursos">
            <div className="itemCurso">
            MySQL esencial
            <a href={CMySQL} target="_blank">
              <img
                src={iconCertificado}
                alt="Icono de certificado"
                className="certificados"
              />
            </a></div>
            <div className="itemCurso">
            GitHub para programadores
            <a href={cGitHub} target="_blank">
              <img
                src={iconCertificado}
                alt="Icono de certificado"
                className="certificados"
              />
            </a>
            </div>
            <div className="itemCurso">
            Fundamentos del desarrollo web Full Stack
            <a href={cFundamentos} target="_blank">
              <img
                src={iconCertificado}
                alt="Icono de certificado"
                className="certificados"
              />
            </a>
            </div>
            <div className="itemCurso">
            Aprende SCRUM
            <a href={cScrum} target="_blank">
              <img
                src={iconCertificado}
                alt="Icono de certificado"
                className="certificados"
              />
            </a>
            </div>
            </div>

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
