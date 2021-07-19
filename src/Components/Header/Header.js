import React from 'react'
import "./Header.css"
import vector1 from "./images/Vector1.svg"
import vector2 from "./images/Vector2.svg"


export default function Header() {
    return (
        <header className="header">
            <div className="containerNombre">
                <p>Rocio Marquesin</p></div>
            <div className="containerAnchors">
                <p> Home</p>
                <p>Proyectos</p>
                <p>Certificaciones</p>
                <p>Conocimientos</p>
                <p>Contacteme</p></div>
                <div className="containersVectorHeader">
            <img src={vector1} alt="vector1"  className="vector1"/>
            <img src={vector2} alt="vector2" className="vector2"  />
            </div>
        </header>
    )
}
