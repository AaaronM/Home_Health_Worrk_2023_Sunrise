import React, { useState } from "react";

import "../CSS/Services.css";
// ___________CSS_____________

import eldery from "../IMG/eldery.jpg";
import elldery from "../IMG/05.png";
// ___________IMG___________

import Popup from "reactjs-popup";

const cardData = [
  {
    id: 1,
    title: "Home Health Aide Services",
    content:
      "Home health aide services are a form of specialized supportive care provided by trained personnel at the comfort of the individual’s home.Ideal choice home health...",
    image: "url(" + require("../IMG/s1.jpg") + ")",
  },
  {
    id: 2,
    title: "Physical Therapy",
    content:
      "Physical therapy is an essential part of preventative care, rehabilitation and treatment. Our therapists take pride in assisting people to improve their mobility, manage pain,...",
    image: "url(" + require("../IMG/s2.jpg") + ")",
  },
  {
    id: 3,
    title: "Occupational Therapy",
    content:
      "What is Occupational Therapy? Occupational therapy involves the assessment and treatment of individuals with barriers that are affecting their physical health...",
    image: "url(" + require("../IMG/s3.jpg") + ")",
  },

  {
    id: 4,
    title: "Medical Social Services",
    content:
      "Medical Social Workers (MSW) are dedicated to providing timely psychosocial interventions to support patients who face day-to-day stressors related to illnesses or various psychosocial challenges....t",
    image: "url(" + require("../IMG/s6.jpg") + ")",
  },

  {
    id: 5,
    title: "Skilled Nursing",
    content:
      "Our registered nurses provide skilled care and instruction to the patients and their families, which can include but is not limited to: Supervision of medications and Treatment and injections.....",
    image: "url(" + require("../IMG/s5.jpg") + ")",
  },

  {
    id: 6,
    title: "Speech Therapy",
    content:
      "Assisting individuals who have difficulty communicating, including speech, hearing, reading and writing and treats swallowing deficits. These difficulties result from stroke, traumatic brain injury...",
    image: "url(" + require("../IMG/s4.jpg") + ")",
  },
];

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  // let toggleClick = isOpen ? "active" : null;

  const handleClickClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="container__services__section">
      <div className="top_pic_dark_container">
        <h2 className="top_pic_dark_container__h2">
          Services that we provide{" "}
        </h2>
      </div>
      <div className="flex">
        {cardData.map((cardItem) => {
          return (
            <div className="container">
              <div className="card__service">
                <div className="card__img__box">
                  <div
                    className="card__img"
                    style={{
                      height: "250px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      objectFit: "cover",
                      backgroundImage: `${cardItem.image}`,
                    }}

                    // image:"../IMG/s1.jpg",
                  ></div>
                </div>
                <div className="card__text">
                  <h3 className="card__h3">{cardItem.title}</h3>
                  <p className="card__p">{cardItem.content}</p>
                  <button
                    // onClick={(cardItem) => setIsOpen(true)}
                    onClick={handleClickOpen}
                    className="card__btn"
                  >
                    Read More
                  </button>

                  {isOpen && (
                    <div className="popup__container">
                      <div>This is the content of the pop-up.</div>
                      <button onClick={handleClickClose}>Close Pop-up</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Services;
