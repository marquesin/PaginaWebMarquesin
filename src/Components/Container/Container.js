import React from "react";
import Header from "../Header/Header.js";
import Home from "../Home/Home.js";
import Proyects from "../Proyects/Proyects.js";
import Certifications from "../Certifications/Certifications.js";
import Skills from "../Skills/Skills.js";
import Contacts from "../Contacts/Contacts.js";
import Footer from "../Footer/Footer.js";
export default function Container() {
  return (
    <div>
      <Header />
      <Home />
      <Proyects />
      <Skills />
      <Certifications />
      <Contacts />
      <Footer />
    </div>
  );
}
