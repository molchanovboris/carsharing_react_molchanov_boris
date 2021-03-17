import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// import MainPage from "./pages/main";
import Slider from "./components/right-block/intex";
import "antd/dist/antd.css";
import "./style.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Slider} />
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
