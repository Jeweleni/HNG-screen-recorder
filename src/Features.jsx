import React from "react";
import simple from "../src/images/simple.svg";
import send from "../src/images/send.svg";
import revisit from "../src/images/revisit.svg";
import videoRepo from "../src/images/videoRepo.svg";

const Features = () => {
  return (
    <div className="features">
      <h1>Features</h1>
      <p>Key Highlights of Our Extension</p>
      <div className="feature-left-right">
        <div className="feature-left">
          <div className="feature">
            <img src={simple} alt="icon" />
            <div>
              <h3>Simple Screen Recording</h3>
              <p>
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>

          <div className="feature">
            <img src={send} alt="icon" />
            <div>
              <h3>Easy-to-Share URL</h3>
              <p>
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>

          <div className="feature">
            <img src={revisit} alt="icon" />
            <div>
              <h3>Revisit Recordings</h3>
              <p className="feature-last-p">
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <div className="feature-right">
          <img src={videoRepo} alt="video-repo" />
        </div>
      </div>
    </div>
  );
};

export default Features;
