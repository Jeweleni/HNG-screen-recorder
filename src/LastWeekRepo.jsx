import React from "react"
import LastWeek from "./LastWeek.jsx"
import video from "../src/images/video.svg";
import video2 from "../src/images/video2.svg";
import link from "../src/images/link.svg";
import more from "../src/images/more.svg";

const LastWeekRepo = () =>{
    return(
        <div className="last-week-div">
            <h3>Files from last week</h3>
            <div className="overall-video-div">
            <LastWeek 
            video = {video2}
            time = "01:35"
            title = "How to Get Twitter Verification Badge"
            date = "SEPTEMBER 23, 2023"
            link = {link}
            more = {more}
            />
            <LastWeek
            video = {video}
            time = "00:34"
            title = "How to create Facebook Ad listing"
            date = "SEPTEMBER 23, 2023"
            link = {link}
            more = {more}
            />
            </div>
        </div>
    )
}

export default LastWeekRepo;
