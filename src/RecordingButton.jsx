import React, { useState } from "react";
import axios from "axios";

const BACKEND_API_URL = "https://your-backend-api.com/upload";

function RecordingButton() {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });
      setMediaStream(stream);
      setIsRecording(true);
      setOverlayVisible(true);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => {
        track.stop();
      });

      // Send the recorded content to the backend
      const recordedChunks = [];
      const mediaRecorder = new MediaRecorder(mediaStream, {
        mimeType: "video/webm",
      });

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          recordedChunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: "video/webm" });
        const formData = new FormData();
        formData.append("recording", blob, "recording.webm");

        axios.post(BACKEND_API_URL, formData).then((response) => {
          // Handle the response from the backend (e.g., show a confirmation message)
        });
      };

      mediaRecorder.stop();
    }

    setIsRecording(false);
    setOverlayVisible(false);
  };

  return (
    <div>
      {!isRecording ? (
        <button onClick={startRecording}>Start Recording</button>
      ) : (
        <div>
          <button onClick={stopRecording}>Stop Recording</button>
          <div className="record-controls">
            {/* Add controls like pause and play here */}
            <button>Pause</button>
            <button>Play</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecordingButton;
