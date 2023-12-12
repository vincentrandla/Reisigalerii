import React from "react";
import rg_logo from "../pictures/rg_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img className="rg_logo" src={rg_logo} alt="Reisigalerii Logo" />
        </Link>
      </div>
      <ul className="navbar_menu">
        <li className="navbar_btns">
          <Link to="/reisipakkumised">Reisipakkumised</Link>
        </li>
        <li className="navbar_btns">
          <Link to="/blogi">Blogi</Link>
        </li>
        <li className="navbar_btns">
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
