import React from "react";
import { Carousel } from "react-bootstrap";
import "./slides.scss"
import { images } from "../images";

const Slider = (props) => {

  const {
    index,
    handleSelect
  } = props;

  const slides = images.map((item) => {
    return (
      <Carousel.Item className="slider">
        <div className="slider__gradient"></div>
        <img src={item.src} alt="type" className="slider__image" />
        <Carousel.Caption>
          <h3 className="slider__title">{item.title}</h3>
          <p className="slider__subtitle">{item.subTitle}</p>
          <button
            style={{ background: item.backgroundColor }}
            className="slider__button"
          >
            Подробнее
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {slides}
    </Carousel>
  );
};

export default Slider;
