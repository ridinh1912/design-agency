import React from "react";
import Contact from "../../components/Contact";
import Intro from "../../components/Intro";
import Footer from "../../components/Layouts/Footer";
import NavBar from "../../components/Layouts/NavBar";
import Services from "../../components/Services";
import Work from "../../components/Work";
import "./style.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <section id="home">
        <Intro />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
