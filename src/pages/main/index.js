import React from "react";
import { withRouter } from "react-router-dom";
import Slider from "../../components/right-block/intex";
import "./style.scss";

const MainPage = () => {
  return (
    <form className="main">
      <div className="burger">Sidebar</div>
      <div className="left-block">
        <h1>Left</h1>
      </div>
      <Slider />
    </form>
  );
};

export default withRouter(MainPage);
