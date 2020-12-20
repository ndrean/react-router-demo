import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppA, AppB } from "./App";

ReactDOM.render(
  <BrowserRouter>
    <h3> Exemple 1: deploy nested & switch</h3>
    <AppA />
    <hr />
    <h3> Exemple 2: switch pages</h3>
    <AppB />
  </BrowserRouter>,
  document.getElementById("root")
);
