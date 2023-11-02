import React from "react";
import './HeroSlide.scss'
export const HeroSlide = ({bg}) => {
  return (
    <div className="__hero-slide">
      <div className="container __hero__container">
        <div className="__bg-image">
          <img src={bg} alt="" />
        </div>
        <div className="__overlay"></div>
      </div>
    </div>
  );
};
