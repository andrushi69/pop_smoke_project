import React from "react";
import "./Modal.css";
import "animate.css";

const Modal = ({ setState }) => {
  return (
    <div>
      <div
        onClick={() => {
          setState(false);
        }}
        className="modal_overlay"
      >
        <div className="image animate__animated animate__fadeInTopLeft">
          <img src="./images/lil pop.jpg" alt="" />
          <button
            className="exit"
            onClick={() => {
              setState(false);
            }}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
