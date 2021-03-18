import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import "./style.scss";
import { images } from "../images";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = images.map((item) => {
    return (
      <Carousel.Item className="slider">
        <div className="slider-gradient"></div>
        <img src={item.src} alt="type" className="slider-image" />
        <Carousel.Caption>
          <h3 className="slider-title">{item.title}</h3>
          <p className="slider-sub-title">{item.subTitle}</p>
          <Button
            style={{ background: item.backgroundColor }}
            className="slider-button"
          >
            Подробнее
          </Button>
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
