import React from "react";
import record from "../src/images/record.svg";
import divider from "../src/images/divider.svg";
import pause from "../src/images/pause.svg";
import stop from "../src/images/stop.svg";
import mic from "../src/images/mic.svg";
import cam from "../src/images/cam.svg";
import trash from "../src/images/trash.svg";
import image from "../src/images/image.svg";

const Overlay = () => {
  return (
    <div className="overlay-wrapper">
      <div className="overlay-style">
        <img className="image" src={image} alt="pic" />
        <div className="overlay-icons">
          <p>00:03:45</p>
          <img src={record} alt="record-icon" />
          <img src={divider} alt="divider-icon" />
          <div className="overlay-icon">
            <img className="overlay-img" src={pause} alt="pause-icon" />
            <p>Pause</p>
          </div>
          <div className="overlay-icon">
            <img className="overlay-img" src={stop} alt="stop-icon" />
            <p>Stop</p>
          </div>
          <div className="overlay-icon">
            <img src={cam} alt="cam-icon" />
            <p>Camera</p>
          </div>
          <div className="overlay-icon">
            <img src={mic} alt="mic-icon" />
            <p>Mic</p>
          </div>
          <img className="overlay-trash" src={trash} alt="trash-icon" />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
