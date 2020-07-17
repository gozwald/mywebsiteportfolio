import React, { useState } from "react";
import Welcome from "./Welcome";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Back from "./Back";
import VizSensor from "react-visibility-sensor";

const App = () => {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [contact, setContact] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contacts, setContacts] = useState(false);

  return (
    <>
      <Back />
      <VizSensor
        partialVisibility
        offset={{ top: 590 }}
        onChange={(isVisible) => {
          setHome(isVisible);
        }}
      >
        <Welcome />
      </VizSensor>
      <Navbar
        about={about}
        home={home}
        portfolio={portfolio}
        contact={contact}
      />
      <VizSensor
        partialVisibility
        offset={{ bottom: 110 }}
        onChange={(isVisible) => {
          setAbout(isVisible);
        }}
      >
        <About />
      </VizSensor>
      <VizSensor
        partialVisibility
        offset={{ bottom: 110 }}
        onChange={(isVisible) => {
          setAbout(isVisible);
        }}
      >
        <Projects />
      </VizSensor>
      <VizSensor
        partialVisibility
        offset={{ bottom: 110 }}
        onChange={(isVisible) => {
          setAbout(isVisible);
        }}
      >
        <Contact />
      </VizSensor>
    </>
  );
};

export default App;
