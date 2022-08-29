import React from "react";
import Intro from "../../components/Intro";
import NavBar from "../../components/Layouts/NavBar";
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
    </div>
  );
}
