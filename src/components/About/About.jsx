import React, { useState } from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

const About = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="about_container">
      <Navbar />
      {modal && (
        <Modal
          setState={(boolean) => {
            setModal(boolean);
          }}
        />
      )}
      <div className="about">
        <img
          onClick={() => {
            setModal(true);
          }}
          className="pop_img"
          src="../images/lil pop.jpg"
          alt=""
        />

        <span>
          Pop Smoke is a legend.Pop Smoke is a legend.Pop Smoke is a legend. Pop
          Smoke is a legend. Pop Smoke is a legend. Pop Smoke is a legend. Pop
          Smoke is a legend. Pop Smoke is a legend. Pop Smoke is a legend. Pop
          Smoke is a legend. Pop Smoke is a legend.
        </span>
      </div>
      <div className="about">
        <span>
          Pop Smoke is a legend.Pop Smoke is a legend.Pop Smoke is a legend. Pop
          Smoke is a legend. Pop Smoke is a legend. Pop Smoke is a legend. Pop
          Smoke is a legend. Pop Smoke is a legend. Pop Smoke is a legend. Pop
          Smoke is a legend. Pop Smoke is a legend.
        </span>
        <img
          onClick={() => {
            setModal(true);
          }}
          className="pop_img"
          src="../images/yung pop.webp"
          alt=""
        />
      </div>
      <div className="about">
        <img
          onClick={() => {
            setModal(true);
          }}
          className="pop_img"
          src="../images/big smoke.jpg"
          alt=""
        />
        <span>
          Pop Smoke is a legend.Pop Smoke is a legend.Pop Smoke is a legend. Pop
          Smoke is a legend. Pop Smoke is a legend. Pop Smoke is a legend. Pop
          Smoke is a legend. Pop Smoke is a legend. Pop Smoke is a legend. Pop
          Smoke is a legend. Pop Smoke is a legend.
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default About;
