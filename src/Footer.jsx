import React from "react";
import footerLogo from "../src/images/footerLogo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links-div">
      <img src={footerLogo} alt="logo" />
        <div className="footer-links">
          <a href="#menu">
            <h4>Menu</h4>
            <p>Home</p>
            <p>Converter</p>
            <p>How it Works</p>
          </a>
        </div>

        <div className="footer-links">
          <a href="#about">
            <h4>About us</h4>
            <p>About</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
          </a>
        </div>

        <div className="footer-links">
          <a href="#screen">
            <h4>Screen Record</h4>
            <p>Browser Window</p>
            <p>Desktop</p>
            <p>Application</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
