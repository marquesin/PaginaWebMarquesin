import React from 'react'
import "./Proyects.css";
import pod from "./images/proyectoPod.png"
import gifos from "./images/proyectoGifos.png"
import hoteles from "./images/proyectoHoteles.png"
import store from "./images/proyectoStore.png"


export default function Proyects() {
    return (
        <section className="containerProyects">
            <h2 className="titleProyects">Proyectos</h2><div className="proyecFila1">
            <img src={store} alt="Imagen proyecto tienda de beneficios" className="imageStore" /></div>
            <div className="proyecFila2">
                <img src={pod} alt="Imagen proyecto Podcast" className="imagePod" />
                <img src={gifos} alt="Imagen proyecto Gifos" className="imageGifos" />
            </div>
           <div className="proyecFila3">
                <img src={hoteles} alt="Imagen proyecto Hoteles" className="imageHoteles"/>
            </div>
        </section>
    )
}
