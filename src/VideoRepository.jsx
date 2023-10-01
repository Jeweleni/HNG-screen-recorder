import React from "react"
import VideoRepo from "./VideoRepo"
import video from "../src/images/video.svg";
import video2 from "../src/images/video2.svg";
import link from "../src/images/link.svg";
import more from "../src/images/more.svg";

const VideoRepository = () =>{
    return(
        <div className="files-div">
            <h3>Recent files</h3>
            <div className="overall-video-div">
            <VideoRepo 
            video = {video}
            time = "00:34"
            title = "How to create Facebook Ad listing"
            date = "SEPTEMBER 23, 2023"
            link = {link}
            more = {more}
            />
            <VideoRepo 
            video = {video2}
            time = "02:14"
            title = "Create Instagram Business Account"
            date = "SEPTEMBER 23, 2023"
            link = {link}
            more = {more}
            />
            </div>
        </div>
    )
}

export default VideoRepository;

