import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/main">
        <img className="rose_logo" src="../images/rose.png" alt="" />
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to="/about">
          Pop's Life
        </Link>
        <Link className="nav-link" to="/albums">
          Albums
        </Link>
        <Link className="nav-link" to="/albums">
          Merch
        </Link>
        <Link className="nav-link" to="/albums">
          Releases
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
