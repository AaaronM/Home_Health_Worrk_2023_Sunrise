import React from "react";

import "../CSS/About.css";
// ___________CSS_____________

import medicalhistory1 from "../IMG/medicalhistory1.png";

import Shadow from "../IMG/Shadow.png";

import Vector from "../IMG/Vector.png";

const About = () => {
  return (
    <div>
      <img src={medicalhistory1} alt="fff" className="about__bg" />

      <img src={Shadow} alt="Shadow" className="shadow__bg" />

      <div className="about__container">
        <div className="about__heading">
          <h2 className="about__heading__h2">Learn About us</h2>
          <p className="about__heading__p">
            Lorem ipsum dolor sit amet consectetur adipisicing .
          </p>
        </div>

        <div className="about__container__middle">
          <p className="middle__heading__p">
            Iusto perspiciatis, magnam odit nihil omnis itaque laboriosam quo
            laborum accusantiumLorem ipsum dolor sit amet, consectetur
            adipisicing elit. Blanditiis non impedit cupiditate,Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Blanditiis non impedit
            cupiditate, iusto perspiciatis, magnam odit nihil omnis itaque
            laboriosam quo laborum accusantium? Error neque sit accusamus quasi.
            Illo, tempora. iusto perspiciatis, magnam odit nihil omnis itaque
            laboriosam quo laborum accusantium? Error neque sit accusamus quasi.
            Illo, tempora.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
