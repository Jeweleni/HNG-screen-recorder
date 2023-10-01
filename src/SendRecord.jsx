import React from "react";
import closeCircle from "../src/images/close-circle.svg";
import success from "../src/images/success.svg";
import RecordReady from "./RecordReady.jsx";
import { Link } from "react-router-dom"

const SendRecord = () => {
  return (
    <div>
      <RecordReady />
      <div className="send-overlay">
        <div className="overlay-display">
          <div className="close-circle">
            <img src={closeCircle} alt="close-icon" />
          </div>
          <div className="ready-overlay-content">
            <img className="success" src={success} alt="success-pic" />
            <p>Your video link has been sent to <span>johnmark@gmail.com</span></p>
            <p className="content-p">
              Would you need to view this video later? Save to your account now!
            </p>
            <button className="ready-button">Save Video</button>
            <h5 className="ready-link">
              Don’t have an account? <Link to="/SignIn">Create account</Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendRecord;
