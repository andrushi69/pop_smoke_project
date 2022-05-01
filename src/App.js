import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Quote from "./components/Quote/Quote.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Quote />
    </div>
  );
}

export default App;
