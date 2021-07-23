import React from "react";
import "./Contacts.css";

export default function Contacts() {
  return (
    <div className="containerContacto">
      <h3 className="contacto">Contactame</h3>
      <div className="contactoFoto">140*140</div>
      <a href="mailto:marquesinro@gmail.com" className="mailtoC">
        marquesinro@gmail.com
      </a>
      <a
        href="http://www.linkedin.com/in/rocio-marquesin-a97265217/"
        className="linkedingC"
      >
        www.linkedin.com/in/rocio-marquesin-a97265217
      </a>
    </div>
  );
}
