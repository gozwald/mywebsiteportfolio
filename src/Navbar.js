import React from "react";
import "./App.css";

const Navbar = ({ home, about, projects, contact }) => {
  return (
    <>
      <ul className="menu">
        <li>
          <a href="#home" className={home ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={about ? "active" : ""}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" className={projects ? "active" : ""}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={contact ? "active" : ""}>
            Contact
          </a>
        </li>
        <li className="slider"></li>
      </ul>
    </>
  );
};

export default Navbar;
