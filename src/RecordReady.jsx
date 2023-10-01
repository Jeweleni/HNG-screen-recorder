import React, {useState, useEffect} from "react";
import Header from "./Header.jsx";
import edit from "../src/images/edit.svg";
import copy from "../src/images/copy.svg";
import facebook from "../src/images/facebook.svg";
import whatsapp from "../src/images/whatsapp.svg";
import telegram from "../src/images/telegram.svg";
import Transcript from "./Transcript.jsx";
import axios from "axios"
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom"


const BACKEND_VIDEO_ENDPOINT = ""

const RecordReady = () => {
  const [videoURL, setVideoURL] = useState("")

  const fetchVideo = async () => {
    try {
      const response = await axios.get(BACKEND_VIDEO_ENDPOINT);
      if (response.status === 200) {
        const videoURL = response.data.videoURL; // Adjust this based on your backend response format
        // Set the video URL to state or directly to the <video> element
        setVideoURL(videoURL);
      } else {
        console.error("Failed to fetch video data");
      }
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };
  
  useEffect(() => {
    fetchVideo();
  }, [])

  return (
    <div className="record-ready-div">
      <div className="ready-div">
        <Header />
        <div className="ready">
          <h2>Your video is ready!</h2>
          <p>Name</p>
          <div className="name-edit">
            <h4>Untitled_Video_20232509 </h4>
            <img src={edit} alt="edit-icon" />
          </div>
          <div className="input-div">
            <input
              className="input1"
              type="text"
              placeholder="enter email of receiver"
            />
            <div>Send</div>
          </div>

          <p className="copy-p">Video url</p>
          <div className="inputt-div">
            <input
              className="input2"
              placeholder="https://www.helpmeout/Untitled_Video_20232509"
            />
            <div className="copyy-div">
              <img src={copy} alt="search-icon" />
              Copy URL
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
        </div>

        <div className="ready-right">
          <div className="ready-video">
          <video controls src={videoURL} width="650" height="200" />
          </div>
          <div className="ready-buttonn">
            <Link to="/VideoView">           
            <button>Expand</button>
            </Link> 
          </div>
          <Transcript />
        </div>
      </div>
      <div className="record-bottom">
        <h3>
          To ensure the availability and privacy of your video, we recommend
          saving it to your account.
        </h3>
        <button>Save Video</button>
        <h4>
          Don’t have an account? <Link to="/SignIn">Create account</Link>
        </h4>
      </div>
      <Footer />
    </div>
  );
};

export default RecordReady;
