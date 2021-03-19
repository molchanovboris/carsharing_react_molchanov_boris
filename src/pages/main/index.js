import React from "react";
import { withRouter } from "react-router-dom";
import Slider from "../../components/right-block/intex";
import MainInfo from "../../components/left-block";
import Sidebar from "../../components/sidebar";
import "./style.scss";

const MainPage = () => {
  return (
    <form className="main">
      <Sidebar />
      <MainInfo />
      <Slider />
    </form>
  );
};

export default withRouter(MainPage);
