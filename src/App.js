import React from "react";
import "./App.css";
import Welcome from "./Welcome";
import Navbar from "./Navbar";
import About from "./About";
import Back from "./Back";

function App() {
  return (
    <>
      <Back />
      <Welcome />
      <Navbar />
      <About />
    </>
  );
}

export default App;
