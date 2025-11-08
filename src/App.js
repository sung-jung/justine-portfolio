import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <section id="about"><Profile /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contacts /></section>
      <Footer />
    </>
  );
}

export default App;
