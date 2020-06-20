import React, { useState } from "react";
import Welcome from "./Welcome";
import Navbar from "./Navbar";
import About from "./About";
import Back from "./Back";
import VizSensor from "react-visibility-sensor";

const App = () => {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contacts, setContacts] = useState(false);

  return (
    <>
      <Back />
      <VizSensor
        partialVisibility
        onChange={(isVisible) => {
          setHome(isVisible);
        }}
      >
        <Welcome />
      </VizSensor>
      <Navbar about={about} home={home} />
      <VizSensor
        onChange={(isVisible) => {
          setAbout(isVisible);
        }}
      >
        <About />
      </VizSensor>
    </>
  );
};

export default App;
