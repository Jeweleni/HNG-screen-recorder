import React from "react";
import exlogo from "../src/images/exlogo.svg";
import profile from "../src/images/profile-circle.svg";
import arrowDown from "../src/images/arrow-down.svg";
import search from "../src/images/search.svg";

const RepoHeader = () => {
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
        <div className="name-search-div">
          <div className="name">
            <h2>Hello, John Mark</h2>
            <p>Here are your recorded videos</p>
          </div>
          <button>
            <img src={search} alt="search-icon" />
            Search for a particular video
          </button>
        </div>
      </div>
    </div>
  );
};

export default RepoHeader;
