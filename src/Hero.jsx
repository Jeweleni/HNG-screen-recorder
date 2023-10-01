import React from "react";
import arrowIcon from "../src/images/arrow-right.svg";
import womanImage from "../src/images/woman.svg";
import manImage from "../src/images/man.svg";
import ladyImage from "../src/images/lady.svg";
import greyGrid from "../src/images/grey-grid.svg";
import blueGrid from "../src/images/blue-grid.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>Show Them Don’t Just Tell</h1>
        <p>
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <button>
          Install HelpMeOut
          <img src={arrowIcon} alt="arrow-icon" />
        </button>
      </div>
      <div className="hero-right">
        <div className="first-div">
          <img src={womanImage} alt="woman" className="woman" />
          <img src={manImage} alt="man" className="man" />
          <img src={blueGrid} alt="blue-grid" className="blue-grid" />
        </div>
        <div className="second-div">
          <img src={greyGrid} alt="grey-grid" className="grey-grid" />
          <img src={ladyImage} alt="lady" className="lady" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
