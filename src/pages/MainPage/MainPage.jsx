import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Slider from "../../components/Slider";
import Info from "../../components/Info";
import Sidebar from "../../components/Sidebar";
import "./MainPage.scss";

const MainPage = () => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [language, setLanguage] = useState("Рус");

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const onToggle = () => {
    setLanguage(language === "Рус" ? "Eng" : "Рус");
  };

  return (
    <div className="main">
      <Sidebar
        language={language}
        onClose={onClose}
        onToggle={onToggle}
        showDrawer={showDrawer}
        visible={visible}
      />
      <Info showDrawer={showDrawer} />
      <Slider handleSelect={handleSelect} index={index} />
    </div>
  );
};

export default withRouter(MainPage);
