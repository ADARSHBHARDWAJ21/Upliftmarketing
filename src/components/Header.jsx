import React from "react";
import "./Navbar.css";
import { siteImages } from "../config/siteMedia";

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Left Logo Section */}
      <div className="left-container">
        <img
          src={siteImages.headerLogo}
          alt="Uplift Advertising Logo"
          className="full-logo"
        />
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="nav-list">
          <li><a className="nav-link" href="#">HOME</a></li>
          <li><a className="nav-link" href="#">SERVICES</a></li>
          <li><a className="nav-link" href="#">KNOW US</a></li>
          <li><a className="nav-link" href="#">CONNECT</a></li>

          <li className="dropdown">
            <a className="nav-link" href="#">
              TOOLS <span className="arrow">&#9662;</span>
            </a>
            <div className="dropdown-content">
              <a href="#">Tool A</a>
              <a href="#">Tool B</a>
              <a href="#">Tool C</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
