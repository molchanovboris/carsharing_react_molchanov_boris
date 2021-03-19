import React from "react";
import { Button } from "react-bootstrap";
import "./style.scss";
import geo from "../../assets/icons/geo.svg";

const MainInfo = () => {
  return (
    <div className="info">
      <div className="info__header">
        <p className="info__name">Need for drive</p>
        <div className="info__city">
          <img src={geo} alt="type"></img>
          <span>Ульяновск</span>
        </div>
      </div>
      <div className="info__body">
        <div>
          <span className="info__first-string">Каршеринг</span>
          <span className="info__second-string">Need for drive</span>
          <span className="info__third-string">
            Поминутная аренда авто твоего города
          </span>
        </div>
        <Button className="info__button">Забронировать</Button>
      </div>
      <div className="info__footer">
        <span className="info__watermark">© 2016-2019 «Need for drive»</span>
        <span className="info__number">8 (495) 234-22-44</span>
      </div>
    </div>
  );
};

export default MainInfo;
