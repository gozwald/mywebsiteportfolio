import React, { useState, useEffect } from "react";
import Welcome from "./Welcome";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Back from "./Back";
import { InView } from "react-intersection-observer";

const App = () => {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [projects, setProjects] = useState(false);

  const THRESHOLD = [1]; // Store multiple thresholds in a constant

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     const scrollCheck = window.scrollY;
  //     console.log(scrollCheck);
  //   });
  // });

  const handleWelcome = (e) => {
    if (e) {
      setHome(true);
      setProjects(false);
      setAbout(false);
      setContact(false);
    }
  };

  const handleAbout = (e) => {
    if (e) {
      setAbout(true);
      setHome(false);
      setProjects(false);
      setContact(false);
    }
  };

  const handleProjects = (e) => {
    if (e) {
      console.log("projects visible");
      setProjects(true);
      setHome(false);
      setAbout(false);
      setContact(false);
    }
  };

  const handleContact = (e) => {
    if (e) {
      setContact(true);
      setProjects(false);
      setHome(false);
      setAbout(false);
    }
  };

  return (
    <>
      <Back />
      <InView
        rootMargin="100px"
        threshold={THRESHOLD}
        onChange={(e, entry) => handleWelcome(e)}
      />
      <Welcome />

      <Navbar about={about} home={home} projects={projects} contact={contact} />
      <InView
        rootMargin="-200px"
        threshold={THRESHOLD}
        onChange={(e, entry) => handleAbout(e)}
      />
      <About />
      <InView
        rootMargin="-200px"
        threshold={THRESHOLD}
        onChange={(e, entry) => handleProjects(e)}
      />
      <Projects />

      <InView
        rootMargin="-200px"
        threshold={THRESHOLD}
        onChange={(e, entry) => handleContact(e)}
      />
      <Contact />
    </>
  );
};

export default App;
