import React from "react";
import "./Skills.css";
import html from "./images/html5-brands.svg";
import css from "./images/css3-alt-brands.svg";
import js from "./images/js-square-brands.svg";
import react from "./images/react-brands.svg";
import firebase from "./images/firebase.png";
import node from "./images/node-brands.svg";
import mysql from "./images/mysql.png";
import code from "./images/file-code-solid.svg";
import otros from "./images/grin-regular.svg";
import lenguaje from "./images/language-solid.svg";
import git from "./images/github-brands.svg";
import trello from "./images/trello-brands.svg";
import jira from "./images/jira-brands.svg";
import office from "./images/microsoft-office.png";
import scrum from "./images/scrum.jpg";
import api from "./images/apiIcon.png";
import laptop from "./images/laptop-code-solid.svg";

export default function Skills() {
  return (
    <section className="skills" id="Conocimientos">
      <h2 className="itemConocimientoTitle">
        <img src={code} alt="Icono code" className="iconSkillsG" />
        Skills Front-End
      </h2>
      <div className="conteinerItemsPro">
        <div className="containerCategoriaLaptop">
          <div className="containerLaptop">
            <img src={laptop} alt="Icon Laptop" className="laptopIcon" />
            <h5>Maquetacion Basica</h5>
          </div>
          <div className="containerSkillsConocimiento">
            <div className="conteinerItemConocimiento">
              <img src={html} alt="Icono html5" className="iconSkills" />
              <h4 className="itemConocimiento">HTML5 </h4>
            </div>
            <div className="conteinerItemConocimiento">
              <img src={css} alt="Icono css3" className="iconSkills" />
              <h4 className="itemConocimiento">CSS3</h4>
            </div>
          </div>
        </div>

        <div className="containerCategoriaLaptop">
          <div className="containerLaptop">
            <img src={laptop} alt="Icon Laptop" className="laptopIcon" />
            <h5>JavaScript</h5>
          </div>
          <div className="containerSkillsConocimiento">
            <div className="conteinerItemConocimiento">
              <img src={js} alt="Icono javaScript" className="iconSkills" />
              <h4 className="itemConocimiento">JavaScript</h4>
            </div>
            <div className="conteinerItemConocimiento">
              <img src={js} alt="Icono javaScript" className="iconSkills" />
              <h4 className="itemConocimiento">Async JS</h4>
            </div>
            <div className="conteinerItemConocimiento">
              <img src={node} alt="Icono node" className="iconSkills" />
              <h4 className="itemConocimiento">NodeJs</h4>
            </div>
          </div>
        </div>

        <div className="containerCategoriaLaptop">
          <div className="containerLaptop">
            <img src={laptop} alt="Icon Laptop" className="laptopIcon" />
            <h5>Libreria</h5>
          </div>
          <div className="containerSkillsConocimiento">
            <div className="conteinerItemConocimiento">
              <img src={react} alt="Icono react" className="iconSkills" />
              <h4 className="itemConocimiento">REACT JS</h4>
            </div>
          </div>
        </div>

        <div className="containerCategoriaLaptop">
          <div className="containerLaptop">
            <img src={laptop} alt="Icon Laptop" className="laptopIcon" />
            <h5>Plataforma</h5>
          </div>
          <div className="containerSkillsConocimiento">
            <div className="conteinerItemConocimiento">
              <img src={firebase} alt="Icono firebase" className="iconSkills" />
              <h4 className="itemConocimiento">FireBase</h4>
            </div>
          </div>
        </div>

        <div className="containerCategoriaLaptop">
          <div className="containerLaptop">
            <img src={laptop} alt="Icon Laptop" className="laptopIcon" />
            <h5>DB</h5>
          </div>
          <div className="containerSkillsConocimiento">
            <div className="conteinerItemConocimiento">
              <img src={mysql} alt="Icono mysql" className="iconSkills" />
              <h4 className="itemConocimiento">MySQL</h4>
            </div>
          </div>
        </div>

        <div className="containerCategoriaLaptop">
          <div className="containerLaptop">
            <img src={laptop} alt="Icon Laptop" className="laptopIcon" />
            <h5>API</h5>
          </div>
          <div className="containerSkillsConocimiento">
            <div className="conteinerItemConocimiento">
              <img src={api} alt="Icono Rest API" className="iconSkills" />
              <h4 className="itemConocimiento">REST API</h4>
            </div>
          </div>
        </div>
      </div>

      <h2 className="itemConocimientoTitle">
        <img src={otros} alt="Icono code" className="iconSkillsG" />
        Otras
      </h2>
      <div className="conteinerItemsOtros">
        <div className="containerCategoriaLaptopOtros">
          <div className="containerLaptop">
            <img src={laptop} alt="Icon Laptop" className="laptopIcon" />
            <h5>Otros</h5>
          </div>
          <div className="containerOtrosConocimiento">
            <div className="conteinerItemConocimiento">
              <img src={git} alt="Icono GitHub" className="iconSkills" />
              <h4 className="itemConocimiento">GitHub</h4>
            </div>

            <div className="conteinerItemConocimiento">
              <img
                src={lenguaje}
                alt="Icono Lenguajes"
                className="iconSkills"
              />
              <h4 className="itemConocimiento">Ingles basico (en formación)</h4>
            </div>
            <div className="conteinerItemConocimiento">
              <img
                src={lenguaje}
                alt="Icono Lenguajes"
                className="iconSkills"
              />
              <h4 className="itemConocimiento">
                Italiano basico (en formación)
              </h4>
            </div>
            <div className="conteinerItemConocimiento">
              <img src={trello} alt="Icono Trello" className="iconSkills" />
              <h4 className="itemConocimiento">Trello</h4>
            </div>
            <div className="conteinerItemConocimiento">
              <img src={jira} alt="Icono Jira" className="iconSkills" />
              <h4 className="itemConocimiento">Jira</h4>
            </div>
            <div className="conteinerItemConocimiento">
              <img src={office} alt="Icono Office" className="iconSkills" />
              <h4 className="itemConocimiento">Microsoft Office</h4>
            </div>
            <div className="conteinerItemConocimiento">
              <img src={scrum} alt="Icono Scrum" className="iconSkills" />
              <h4 className="itemConocimiento">SCRUM</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
