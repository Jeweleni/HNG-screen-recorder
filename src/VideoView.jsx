import React from "react";
import exlogo from "../src/images/exlogo.svg";
import profile from "../src/images/profile-circle.svg";
import arrowDown from "../src/images/arrow-down.svg";
import edit from "../src/images/edit.svg";
import VideoRepo from "./VideoRepo";
import video from "../src/images/video.svg";
import link from "../src/images/link.svg";
import more from "../src/images/more.svg";
import copy from "../src/images/copy.svg";
import facebook from "../src/images/facebook.svg";
import whatsapp from "../src/images/whatsapp.svg";
import telegram from "../src/images/telegram.svg";
import Transcript from "./Transcript.jsx"

const VideoView = () => {
  return (
    <div className="videoRepo">
      <div className="logo-name-div">
        <div className="videoRepo-logo">
          <img src={exlogo} alt="extension-logo" />
          <div className="profile-div">
            <img src={profile} alt="profile-icon" />
            <p>John Mark</p>
            <img src={arrowDown} alt="" />
          </div>
        </div>
      </div>
      <div className="video-view-div">
        <div className="links">
          <a href="#home">Home </a>
          <a href="#home">/ Recent Videos </a>
          <a href="#home" className="link3">
            / How To Create A Facebook Ad Listing{" "}
          </a>
        </div>
        <div>
          <div className="video-title">
            <h3>How To Create A Facebook Ad Listing </h3>
            <img src={edit} alt="edit-icon" />
          </div>
          <div>
            <VideoRepo
              video={video}
              time="00:34"
              title="How to create Facebook Ad listing"
              date="SEPTEMBER 23, 2023"
              link={link}
              more={more}
            />
          </div>
        </div>
        <div className="input1-2">
          <div className="input1-div">
            <input
              className="input1"
              type="text"
              placeholder="enter email of receiver"
            />
            <div>Send</div>
          </div>
          <div className="input2-div">
            <input
              className="input2"
              placeholder="https://www.helpmeout/Untitled_Video_20232509"
            />
            <div className="copy-div">
              <img src={copy} alt="search-icon" />
              Copy URL
            </div>
          </div>
        </div>
        <div className="social-div">
          <h3>Share your video </h3>
          <div className="socials">
            <button className="social-button">
              <img src={facebook} alt="facebook-icon" />
              Facebook
            </button>
            <button className="social-button">
              <img src={whatsapp} alt="whatsapp-icon" />
              WhatsApp
            </button>
            <button className="social-button">
              <img src={telegram} alt="telegram-icon" />
              Telegram
            </button>
          </div>
        </div>
        <Transcript />
      </div>
    </div>
  );
};

export default VideoView;
