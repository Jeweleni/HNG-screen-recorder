import React, { useState } from "react";
import exlogo from "../src/images/exlogo.svg";
import settings from "../src/images/setting.svg";
import close from "../src/images/close.svg";
import monitor from "../src/images/monitor.svg";
import tab from "../src/images/tab.svg";
import camera from "../src/images/camera.svg";
import toggle from "../src/images/toggle.svg";
import microphone from "../src/images/microphone.svg";
import record from "../src/images/record.svg";
import divider from "../src/images/divider.svg";
import pause from "../src/images/pause.svg";
import stop from "../src/images/stop.svg";
import mic from "../src/images/mic.svg";
import cam from "../src/images/cam.svg";
import trash from "../src/images/trash.svg";
import image from "../src/images/image.svg";
import resume from "../src/images/resume.svg";
import toggleOff from "../src/images/toggle-off.svg";
import "./App.css";

const Popup = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [enableAudio, setEnableAudio] = useState(true);
  const [enableVideo, setEnableVideo] = useState(true);


  const BACKEND_API_ENDPOINT =
    "https://hngvideostreamer.onrender.com/api/upload-video";
  const toggleRecording = () => {
    if (mediaRecorder) {
      if (mediaRecorder.state === "recording") {
        mediaRecorder.pause();
        setIsPaused(true);
      } else if (mediaRecorder.state === "paused") {
        mediaRecorder.resume();
        setIsPaused(false);
      }
    }
  };

  const toggleAudio = () => {
    setEnableAudio(!enableAudio);
  };

  const toggleVideo = () => {
    setEnableVideo(!enableVideo);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: enableVideo,
        audio: enableAudio,
      });
      setMediaStream(stream);

      const recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
      const recordedChunks = [];
      setMediaRecorder(recorder);
      recorder.ondataavailable = (e) => {
        console.log("Data available:", e.data.size);
        if (e.data.size > 0) {
          recordedChunks.push(e.data);
        }
        console.log("recordedChunks:", recordedChunks)
      };
      recorder.onstop = async () => {
        const blob = new Blob(recordedChunks, { type: "video/webm" });
        // Send the blob data to the server
        const formData = new FormData();
        formData.append("recording", blob, "recording.webm");
        console.log(formData);

        // To access and log individual fields
        console.log("Recording Field:", formData.get("recording"));

        // To iterate and log all entries
        for (const entry of formData.entries()) {
          console.log(entry[0], entry[1]);
        }
        try {
          const response = await fetch(BACKEND_API_ENDPOINT, {
            method: "POST",
            body: formData,
          });
          if (response.ok) {
            console.log("Video upload successful");
          } else {
            console.error("Video upload failed");
          }
        } catch (error) {
          console.error("Error sending video data:", error);
        }
        setIsRecording(false);
      };
      recorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => {
        track.stop();
      });

      if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
      }
    }
  };

  return (
    <div className="popup-wrapper">
      {!isRecording ? (
        <div className="popup">
          <div className="logo-icons">
            <img src={exlogo} alt="extension-logo" />
            <div className="set-close-div">
              <img src={settings} alt="setting-icon" />
              <img src={close} alt="close-icon" />
            </div>
          </div>
          <p>
            This extension helps you record and share help videos with ease.
          </p>
          <div className="monitor-tab-div">
            <div className="icon">
              <img src={monitor} alt="screen-icon" />
              <p>Full screen</p>
            </div>
            <div className="icon">
              <img src={tab} alt="tab-icon" />
              <p>Current Tab</p>
            </div>
          </div>
          <div className="toggle-div">
            <div className="icons">
              <img src={camera} alt="camera-icon" />
              <h4>Camera</h4>
            </div>
            <img
              onClick={toggleVideo}
              src={enableVideo ? toggle : toggleOff}
              alt="toggle"
            />
          </div>
          <div className="toggle-div">
            <div className="icons">
              <img src={microphone} alt="microphone-icon" />
              <h4>Audio</h4>
            </div>
            <img
              onClick={toggleAudio}
              src={enableAudio ? toggle : toggleOff}
              alt="toggle"
            />
          </div>
          <button onClick={startRecording} className="popup-button">
            Start Recording
          </button>
        </div>
      ) : (
        <div></div>
      )}
      {isRecording && (
        <div className="overlay-wrapper">
          <img className="image" src={image} alt="pic" />
          <div className="overlay-icons">
            <p>00:03:45</p>
            <img src={record} alt="record-icon" />
            <img src={divider} alt="divider-icon" />
            <div className="overlay-icon">
              <img
                onClick={toggleRecording}
                src={isPaused ? resume : pause}
                className="overlay-img"
                alt="pause-icon"
              />
              {isPaused ? <p>Paused</p> : <p>Play</p>}
            </div>
            <div className="overlay-icon">
              <img
                onClick={stopRecording}
                className="overlay-img"
                src={stop}
                alt="stop-icon"
              />
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
      )}
    </div>
  );
};

export default Popup;