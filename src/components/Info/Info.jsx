import React from "react";
import { Button } from "antd";
import "./info.scss";
import geo from "../../assets/icons/geo.svg";
import menu_btn_small from "../../assets/icons/menu_btn_small.svg";


const Info = (props) => {

  const {
    showDrawer,
  } = props;

  return (
    <div className="info">
      <Button
        type="primary"
        onClick={showDrawer}
        className="info__show-drawer"
      >
        <img src={menu_btn_small} alt="type" />
      </Button>
      <div className="info__header">
        <p className="info__name">Need for drive</p>
        <div className="info__city">
          <img src={geo} alt="type"></img>
          <span>Ульяновск</span>
        </div>
      </div>
      <div className="about-info">
        <div>
          <p className="about-info__first-string">Каршеринг</p>
          <p className="about-info__second-string">Need for drive</p>
          <p className="about-info__third-string">
            Поминутная аренда авто твоего города
          </p>
        </div>
        <Button className="about-info__button">Забронировать</Button>
      </div>
      <div className="info__footer">
        <p className="info__watermark">© 2016-2019 «Need for drive»</p>
        <p className="info__number">8 (495) 234-22-44</p>
      </div>
    </div>
  );
};

export default Info;
