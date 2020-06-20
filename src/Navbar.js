import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    <>
      <ul className="menu">
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li className="slider"></li>
      </ul>
    </>
  );
};

export default Navbar;
