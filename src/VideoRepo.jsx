import React from "react";

const VideoRepo = (props) => {
  return (
        <div className="video-wrapper">
          <div className="video-time-div">
            <div className="video">
              <img src={props.video} alt="video" />
            </div>
            <div className="time">
              <h4>{props.time}</h4>
            </div>
          </div>
          <div className="text-icon-div">
            <div className="left-text">
              <h3>{props.title}</h3>
              <p>{props.date}</p>
            </div>
            <div className="icon-div">
              <img src={props.link} alt="link-icon" />
              <img src={props.more} alt="more-icon" />
            </div>
          </div>
        </div>
  );
};

export default VideoRepo;
