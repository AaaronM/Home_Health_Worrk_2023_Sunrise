import React from "react";

import "../CSS/Home.css";
// ___________CSS_____________
import mainpic from "../IMG/mainpic.png";
import Thermometer from "../IMG/Thermometer.png";
import Stetoscope from "../IMG/Stetoscope.png";
import microskop from "../IMG/microskop.png";
import MedicalRecord from "../IMG/MedicalRecord.png";

import IllustrationTitle from "../IMG/IllustrationTitle.png";
import FirstAid from "../IMG/FirstAid.png";
import firstidkit from "../IMG/firstidkit.png";
import pharmacy_1 from "../IMG/pharmacy_1.png";
import stethoscope_1 from "../IMG/stethoscope_1.png";
import sc from "../IMG/sc.png";
import circular from "../IMG/circular.png";

import DNA from "../IMG/DNA.png";
import Bottle from "../IMG/Bottle.png";

// ___________IMG________________

import {
  BsFillHeartPulseFill,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

import { FiMail } from "react-icons/fi";
import { RiMentalHealthLine, RiHomeHeartFill } from "react-icons/ri";
// ______________REACT__ICONS________________

import ServicesProvided from "../components/ServicesProvided";
// ______________SERVICES ________________
import DocList from "../components/DocList";

// ______________DOCLIST ________________

import Consultation from "../components/Consultation";

// ______________ Consultation________________

const Home = () => {
  return (
    <div>
      <div className="home__container">
        <div className="text__container">
          <div className="home__heading__top__container">
            <p className="home__heading__top">We are here for you </p>{" "}
            <BsFillHeartPulseFill className="home__heading__top__icon" />
          </div>
          <h1 className="home__heading">
            Bringing The Best Care To Your Home.
          </h1>
          <p className="home__heading__bottom ">
            Trust your health to the best specialists,Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Natus, nemo.
          </p>
        </div>
        <div className="img__container">
          <img className="home__img" src={mainpic} alt="pic5" />
          <div className="home__img__bg"></div>
          <div className="home__img__bg__2"></div>
          {/* <img className="" src={Stetoscope} alt="Stetoscope" /> */}
        </div>
      </div>
      <div className="servicesProvided__container">
        <img className="firstidkit" src={firstidkit} alt="firstidkit" />
        <img className="circular" src={circular} alt="circular" />
      </div>
      <ServicesProvided />

      {/* // ______________SERVICES ________________ */}
      <DocList />

      {/* // ______________DOCLIST ________________ */}

      <div className="consultation__container__bg">
        <Consultation />
        <img
          className="stethoscope_1"
          src={stethoscope_1}
          alt="stethoscope_1"
        />
        <img className="sc" src={sc} alt="sc" />
        <img className="Bottle" src={Bottle} alt="Bottle" />
        <img className="DNA" src={DNA} alt="DNA" />
        <img className="pharmacy_1" src={pharmacy_1} alt="pharmacy_1" />

        <BsFacebook className="icon__react1" />
        <BsInstagram className="icon__react2" />
        <BsLinkedin className="icon__react3" />
        <FiMail className="icon__react4" />
      </div>

      {/* // ______________ Consultation________________ */}
    </div>
  );
};
export default Home;
