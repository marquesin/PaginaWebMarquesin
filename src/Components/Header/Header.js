import React, { useState } from "react";
import "./Header.css";
import linkedin from "./images/linkedin-in-brands.svg";
import mail from "./images/envelope-regular.svg";
import cv from "./images/CV_Marquesin_Rocio.pdf";
import bar from "./images/bars-solid.svg";
import iconRm from "./images/favicon.ico";

export default function Header() {
  const [hamburguesa, setHamburgesa] = useState(false);
  return (
    <>
      <header className="header">
        <div className="containerNombre">
          <p>Rocio Marquesin</p>
        </div>
        <div className="containerAnchors">
          <p>
            <a href="#Home">Home</a>
          </p>
          <p>
            <a href="#Proyectos"> Proyectos</a>
          </p>
          <p>
            <a href="#Conocimientos"> Conocimientos</a>
          </p>
          <p>
            <a href="#Certificaciones"> Certificaciones</a>
          </p>
          <p>
            <a href="#Contactame"> Contacteme</a>
          </p>
        </div>
        <div className="containersVectorHeader">
          <a
            href="https://www.linkedin.com/in/rocio-marquesin-a97265217/"
            target="_blank"
          >
            <img src={linkedin} alt="Icono Linkeding" className="icon" />
          </a>
          <a href="mailto:marquesinro@gmail.com" target="_blank">
            {" "}
            <img src={mail} alt="Icono Mail" className="icon" />
          </a>
          <a href={cv} download="CV_Marquesin_Rocio" target="_blank">
            <div className="buttonCVH">CV</div>
          </a>
        </div>
      </header>
      <header className="containerHeaderResponsive">
        <div className="headerResponsive">
          {/* <div className="containerNombre"> */}
          <img src={iconRm} alt="Icono RM" className="iconRm" />
          {/* </div> */}
          <img
            src={bar}
            alt="Icono menu desplegable"
            className="iconBar"
            onClick={() => setHamburgesa(!hamburguesa)}
          />
        </div>
      </header>
      {hamburguesa ? (
        <div className="hamburgesaDesplegable">
          <div className="containerAnchorsHamburguesa">
            <p>
              <a href="#Home">Home</a>
            </p>
            <p>
              <a href="#Proyectos"> Proyectos</a>
            </p>
            <p>
              <a href="#Conocimientos"> Conocimientos</a>
            </p>
            <p>
              <a href="#Certificaciones"> Certificaciones</a>
            </p>
            <p>
              <a href="#Contactame"> Contacteme</a>
            </p>
          </div>
          <div className="iconsHamburgesa">
            <a
              href="https://www.linkedin.com/in/rocio-marquesin-a97265217/"
              target="_blank"
            >
              <img src={linkedin} alt="Icono Linkeding" className="icon" />
            </a>
            <a href="mailto:marquesinro@gmail.com" target="_blank">
              {" "}
              <img src={mail} alt="Icono Mail" className="icon" />
            </a>
            <a href={cv} download="CV_Marquesin_Rocio" target="_blank">
              <div className="buttonCVH">CV</div>
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
