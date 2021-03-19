import { Button, Drawer } from "antd";
import React, { useState } from "react";
import "./style.scss";
import menu_btn from "../../assets/icons/menu_btn.svg";
import menu_btn_small from "../../assets/icons/menu_btn_small.svg";
import close_btn from "../../assets/icons/close_btn.svg";
import { NavLink } from "react-router-dom";
import telegram from "../../assets/icons/telegram.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";

const Sidebar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [language, setLanguage] = useState("Eng");

  const toggle = () => {
    setLanguage(language === "Eng" ? "Rus" : "Eng");
  };

  return (
    <div className="sidebar">
      <Button
        type="primary"
        onClick={showDrawer}
        className="sidebar-show-button"
      >
        <img src={menu_btn} alt="type" />
      </Button>
      <Button
        type="primary"
        onClick={showDrawer}
        className="sidebar-show-small-button"
      >
        <img src={menu_btn_small} alt="type" />
      </Button>
      <Button onClick={toggle} className="sidebar-language">
        {language}
      </Button>
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        className="sidebar__drawer"
      >
        <Button className="sidebar__close-button" onClick={onClose}>
          <img src={close_btn} alt="type" />
        </Button>
        <div className="sidebar-block">
          <NavLink to="/" className="sidebar-items">
            Парковка
          </NavLink>
          <NavLink to="/" className="sidebar-items">
            Страховка
          </NavLink>
          <NavLink to="/" className="sidebar-items">
            Бензин
          </NavLink>
          <NavLink to="/" className="sidebar-items">
            Обслуживание
          </NavLink>
          <div className="sidebar-society-links">
            <NavLink to="/" className="sidebar-society-item">
              <img src={telegram} alt="type" />
            </NavLink>
            <NavLink to="/" className="sidebar-society-item">
              <img src={facebook} alt="type" />
            </NavLink>
            <NavLink to="/" className="sidebar-society-item">
              <img src={instagram} alt="type" />
            </NavLink>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
