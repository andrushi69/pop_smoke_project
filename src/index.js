import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../src/App.js";
import About from "./components/About/About.jsx";
import "./index.css";

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/main" exact element={<App />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
