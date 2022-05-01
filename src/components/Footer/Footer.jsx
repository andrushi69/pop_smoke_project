import React from "react";
import { FaceBook } from "../Icons/Icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact_info">
        <span>Big Ounce: XXXXXXXXXX</span>
        <span>Lil Pivo: XXXXXXXXXX</span>
      </div>
      <div className="footer_image">
        <img className="rose_footer" src="../images/rose.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
