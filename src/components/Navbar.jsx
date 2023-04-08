import React from "react";
import { Link } from "react-router-dom";

import "../CSS/Navbar.css";
// ____________CSS____________

import Group from "../IMG/Group.png";

// ____________IMG____________

const Navbar = () => {
  return (
    <div className="navber__container">
      <li>
        <Link className="navber__items" to="/">
          <img src={Group} alt="" className="group" />
        </Link>
      </li>
      <div className="navber__items__contaner">
        <li>
          <Link className="navber__items" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="navber__items" to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link className="navber__items" to="/contacts">
            Contacts
          </Link>
        </li>
      </div>
    </div>
  );
};
export default Navbar;
