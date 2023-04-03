import React from "react";

import "../CSS/Consultation.css";
// _________CSS___________

import mainpic from "../IMG/mainpic.png";
// ___________IMG________________

function Consultation() {
  return (
    <div>
      <div className="consultation__container">
        <img src={mainpic} alt="pic" className="consultation__pic" />
        <div className="consultation__text">
          <h3 className="consultation__heading">
            Consultation starting at just $75{" "}
          </h3>
          <p className="consultation__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            libero ducimus cumque expedita animi. libero ducimus cumque expedita
            animi.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
