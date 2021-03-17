import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from "react-bootstrap";
import ferrari from "../../assets/fonts/ferrari.svg";
import gtr from "../../assets/fonts/gtr.svg";
import porsche from "../../assets/fonts/porsche.svg";
import tesla from "../../assets/fonts/tesla.svg";
import "./style.scss";

const Slider = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const items = [
    {
      title: "Бесплатная парковка",
      subTitle:
        "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах",
      src: tesla,
      backgroundColor: "linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)",
    },
    {
      title: "Страховка",
      subTitle: "Полная страховка страховка автомобиля",
      src: ferrari,
      backgroundColor: "linear-gradient(90deg, #132949 0%, #0C7B67 100%)",
    },
    {
      title: "Бензин",
      subTitle: "Полный бак на любой заправке города за наш счёт",
      src: porsche,
      backgroundColor: "linear-gradient(90deg, #493013 0%, #7B0C3B 100%)",
    },
    {
      title: "Обслуживание",
      subTitle: "Автомобиль проходит еженедельное ТО",
      src: gtr,
      backgroundColor: "linear-gradient(90deg, #281349 0%, #720C7B 100%)",
    },
  ];

  const slides = items.map((item) => {
    return (
      <Carousel.Item>
        <div className="slider-gradient"></div>
        <img src={item.src} />
        <Carousel.Caption>
          <h3 className="info-title">{item.title}</h3>
          <p className="info-sub-title">{item.subTitle}</p>
          <Button
            style={{ background: item.backgroundColor }}
            className="info-button"
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
