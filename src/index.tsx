import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import "./style.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
