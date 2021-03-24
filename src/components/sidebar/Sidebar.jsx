import { Button, Drawer } from "antd";
import React from "react";
import "./Sidebar.scss";
import menu_btn from "../../assets/icons/menu_btn.svg";
import menu_btn_lg from "../../assets/icons/menu_btn_lg.svg";
import close_btn from "../../assets/icons/close_btn.svg";
import { NavLink } from "react-router-dom";
import telegram from "../../assets/icons/telegram.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";

const Sidebar = (props) => {

  const {
    showDrawer,
    onClose,
    visible,
    language,
    onToggle
  } = props;

  return (
    <>
      <div className="sidebar">
        <button
          type="primary"
          onClick={showDrawer}
          className="sidebar__show"
        >
          <img src={menu_btn} alt="type" />
        </button>
        <button
          type="primary"
          onClick={showDrawer}
          className="sidebar__show-lg"
        >
          <img src={menu_btn_lg} alt="type" />
        </button>
        <button onClick={onToggle}    className="sidebar__language">
          {language}
        </button>
      </div>

      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        className="drawer"
      >
        <Button className="drawer__close" onClick={onClose}>
          <img src={close_btn} alt="type" />
        </Button>
        <div className="drawer__block">
          <div className="drawer__links">
            <NavLink to="/" className="drawer__link">
              Парковка
            </NavLink>
            <NavLink to="/" className="drawer__link">
              Страховка
            </NavLink>
            <NavLink to="/" className="drawer__link">
              Бензин
            </NavLink>
            <NavLink to="/" className="drawer__link">
              Обслуживание
            </NavLink>
          </div>
          <div>
            <NavLink to="/" className="drawer__socials">
              <img src={telegram} alt="type" />
            </NavLink>
            <NavLink to="/" className="drawer__socials">
              <img src={facebook} alt="type" />
            </NavLink>
            <NavLink to="/" className="drawer__socials">
              <img src={instagram} alt="type" />
            </NavLink>
          </div>
        </div>
        <button onClick={onToggle} className="drawer__language">
          {language}
        </button>
      </Drawer>
      </>
  );
};

export default Sidebar;
