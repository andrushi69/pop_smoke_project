import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../src/App.js";
import "./index.css";
import Albums from "./pages/Albums/Albums";

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/main" exact element={<App />} />
        <Route path="/albums" exact element={<Albums />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
