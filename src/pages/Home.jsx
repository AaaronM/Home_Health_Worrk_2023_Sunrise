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

// ___________IMG________________

import { BsFillHeartPulseFill, BsFileMedical } from "react-icons/bs";
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
      <img className="firstidkit" src={firstidkit} alt="firstidkit" />
      <ServicesProvided />
      {/* // ______________SERVICES ________________ */}
      <DocList />
      <img className="pharmacy_1" src={pharmacy_1} alt="pharmacy_1" />
      {/* // ______________DOCLIST ________________ */}

      <Consultation />
      <img className="stethoscope_1" src={stethoscope_1} alt="stethoscope_1" />
      <img className="sc" src={sc} alt="sc" />

      {/* // ______________ Consultation________________ */}
    </div>
  );
};
export default Home;
