import React from "react";
import "./Proyects.css";
import gitRepo from "./images/github-square-brands.svg";
import link from "./images/link-solid.svg";
export default function Proyects() {
  return (
    <section className="containerProyects" id="Proyectos">
      <div className="containerAboluteProyects">
        <h2 className="titleProyects">Proyectos</h2>
        <div className="proyecFila1">
          <div className="imagePetro">
            <button className="buttonRepo">
              <a
                href="https://github.com/marquesin/proyectoossipa"
                target="_blank"
              >
                <img
                  src={gitRepo}
                  alt="icono repositorio"
                  className="iconoRepo"
                />
              </a>
            </button>
          </div>
          <div className="imageStore">
            <button className="buttonRepo">
              <a
                href="https://github.com/marquesin/store-marquesin-rocio"
                target="_blank"
              >
                <img
                  src={gitRepo}
                  alt="icono repositorio"
                  className="iconoRepo"
                />
              </a>
            </button>
            <button className="buttonLinkProyect">
              <a
                href="https://marquesin.github.io/store-marquesin-rocio/#/"
                target="_blank"
              >
                <img src={link} alt="Icono link" className="iconoRepo" />
              </a>
            </button>
          </div>
        </div>
        <div className="proyecFila2">
          <div className="imagePod">
            <button className="buttonRepo">
              <a href="https://github.com/marquesin/podcast" target="_blank">
                <img
                  src={gitRepo}
                  alt="icono repositorio"
                  className="iconoRepo"
                />
              </a>
            </button>
            <button className="buttonLinkProyect">
              <a href="https://podcastmarquesin.netlify.app/" target="_blank">
                <img src={link} alt="Icono link" className="iconoRepo" />
              </a>
            </button>
          </div>
          <div className="imageGifos">
            <button className="buttonRepo">
              <a
                href="https://github.com/marquesin/BuscadorDeGifs"
                target="_blank"
              >
                <img
                  src={gitRepo}
                  alt="icono repositorio"
                  className="iconoRepo"
                />
              </a>
            </button>
            <button className="buttonLinkProyect">
              <a href="https://bd9i0.csb.app/" target="_blank">
                <img src={link} alt="Icono link" className="iconoRepo" />
              </a>
            </button>
          </div>
        </div>
        <div className="proyecFila3">
          <div className="imageHoteles">
            <button className="buttonRepo">
              <a
                href="https://github.com/marquesin/reserva_alojamientos"
                target="_blank"
              >
                <img
                  src={gitRepo}
                  alt="icono repositorio"
                  className="iconoRepo"
                />
              </a>
            </button>
            <button className="buttonLinkProyect">
              <a href="https://dt143.csb.app/" target="_blank">
                <img src={link} alt="Icono link" className="iconoRepo" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
