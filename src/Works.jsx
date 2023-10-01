import React from "react";
import number1 from "../src/images/number1.svg";
import number2 from "../src/images/number2.svg";
import number3 from "../src/images/number3.svg";
import recImage from "../src/images/recImage.svg";

const Works = () => {
  return (
    <div  className="how">
      <h1>How it works</h1>
      <div className="how-it-div">
        <div className="how-it">
          <img src={number1} alt="number-icon" className="numbers" />
          <h3>Record Screen</h3>
          <p>
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </p>
          <img src={recImage} alt="rec-pic" className="rec-image" />
        </div>

        <div className="how-it">
          <img src={number2} alt="number-icon" className="numbers"/>
          <h3>Record Screen</h3>
          <p>
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </p>
          <img src={recImage} alt="rec-pic" className="rec-image" />
        </div>

        <div className="how-it">
          <img src={number3} alt="number-icon" className="numbers" />
          <h3>Record Screen</h3>
          <p>
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </p>
          <img src={recImage} alt="rec-pic" className="rec-image" />
        </div>
      </div>
    </div>
  );
};

export default Works;
