import React from "react";

import "../CSS/ServicesProvided.css";
// ____________CSS________________

import { FaBeer } from "react-icons/fa";
// _________________REACTICONS______________

function ServicesProvided() {
  return (
    <div>
      <h1 className="servicesProvided__h1">HELLOOOO</h1>
      <p className="servicesProvided__p">PPPPPPPPPPPPP</p>
      <div className="servicesProvided">
        <div className="servicesProvided__container">
          <div className="box">
            <FaBeer className="box__icon" />
            <p>HELLO</p>
          </div>
          <div className="box">
            <FaBeer className="box__icon" />
            <p>HELLO</p>
          </div>
          <div className="box">
            <FaBeer className="box__icon" />
            <p>HELLO</p>
          </div>
          <div className="box">
            <FaBeer className="box__icon" />
            <p>HELLO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesProvided;
