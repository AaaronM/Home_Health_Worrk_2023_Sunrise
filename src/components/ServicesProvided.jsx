import React from "react";

import "../CSS/ServicesProvided.css";
// ____________CSS________________

import { FaBeer } from "react-icons/fa";

import { TbHealthRecognition } from "react-icons/tb";

import { RiMentalHealthLine, RiHomeHeartFill } from "react-icons/ri";

import { GiTransparentTubes } from "react-icons/gi";

import { MdOutlineHealthAndSafety } from "react-icons/md";

// _________________REACTICONS______________

function ServicesProvided() {
  return (
    <div>
      <h1 className="servicesProvided__h1">What Services Sunrise Offers</h1>
      <p className="servicesProvided__p">
        Our local professional care teams led by our Registered Nurses provide a
        Higher Standard of Home Care.
      </p>
      <div className="servicesProvided">
        <div className="servicesProvided__container">
          <div className="box">
            <MdOutlineHealthAndSafety className="box__icon" />
            <p className="box__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            </p>
          </div>
          <div className="box">
            <GiTransparentTubes className="box__icon" />
            <p className="box__text">
              Dolor sit amet consectetur adipisicing elit.Lorem{" "}
            </p>
          </div>
          <div className="box">
            <RiMentalHealthLine className="box__icon" />
            <p className="box__text">
              Consectetur Magni adipisicing Dolor sit amet consectetur
            </p>
          </div>
          <div className="box">
            <RiHomeHeartFill className="box__icon" />
            <p className="box__text">
              Adipisicing adipisicing Dolor amet sit amet elit. Magni
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesProvided;
