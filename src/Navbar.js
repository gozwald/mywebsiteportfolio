import React from "react";
import "./App.css";

const Navbar = ({ home, about, projects, contacts }) => {
  console.log(about);
  return (
    <>
      <ul className="menu">
        <li>
          <a href="#" className={home ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={about ? "active" : ""}>
            About
          </a>
        </li>
        <li>
          <a href="#" className={projects ? "active" : ""}>
            Projects
          </a>
        </li>
        <li>
          <a href="#" className={contacts ? "active" : ""}>
            Contact
          </a>
        </li>
        <li className="slider"></li>
      </ul>
    </>
  );
};

export default Navbar;
