import React from "react";

import "../CSS/DocList.css";
// _________CSS___________

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css/sea-green";
// _________________SPLIDE__CAROSEL_________

import pic1 from "../IMG/pic1.png";
import heart1 from "../IMG/Heart.png";
// __________IMG________

function DocList() {
  return (
    <div className="flex">
      <Splide
        aria-label="Doctors List"
        options={{
          rewind: true,
          perPage: 3,
          width: 1200,
          rewindByDrag: true,
          gap: "1rem",
        }}
      >
        <SplideSlide>
          <div className="card__container">
            <div className="review">
              <img src={heart1} alt="heart" className="icon__review" />
              <img src={pic1} alt="" className="review__img" />
              <p className="review__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div className="card">
              <div className="card__top">
                <img src={pic1} alt="Images1" className="splide__pic" />
              </div>
              <div className="card__bttm">
                <p className="doc__title">Dr James Smith</p>
                <p className="doc__ifo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="doc__btn">Read More</button>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="card__container">
            <div className="review1">
              <img src={heart1} alt="heart" className="icon__review" />
              <img src={pic1} alt="" className="review__img" />
              <p className="review__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div className="card">
              <div className="card__top">
                <img src={pic1} alt="Images1" className="splide__pic" />
              </div>
              <div className="card__bttm">
                <p className="doc__title">Dr James Smith</p>
                <p className="doc__ifo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="doc__btn">Read More</button>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="card__container">
            <div className="review2">
              <img src={heart1} alt="heart" className="icon__review" />
              <img src={pic1} alt="" className="review__img" />
              <p className="review__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div className="card">
              <div className="card__top">
                <img src={pic1} alt="Images1" className="splide__pic" />
              </div>
              <div className="card__bttm">
                <p className="doc__title">Dr James Smith</p>
                <p className="doc__ifo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="doc__btn">Read More</button>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="card__container">
            <div className="review">
              <img src={heart1} alt="heart" className="icon__review" />
              <img src={pic1} alt="" className="review__img" />
              <p className="review__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div className="card">
              <div className="card__top">
                <img src={pic1} alt="Images1" className="splide__pic" />
              </div>
              <div className="card__bttm">
                <p className="doc__title">Dr James Smith</p>
                <p className="doc__ifo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="doc__btn">Read More</button>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default DocList;
