import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./style.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
