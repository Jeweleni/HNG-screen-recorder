import React from "react";
import exlogo from "../src/images/exlogo.svg";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header" >
      <img src={exlogo} alt="extension-logo" />
      <div className="headers-feature">
        <p>Features</p>
        <p>How it works</p>
      </div>
      <Link to="/SignIn">
      <button>Get Started</button>
      </Link>
    </div>
  );
};

export default Header;
