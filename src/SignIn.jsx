import React from "react";
import exlogo from "../src/images/exlogo.svg";
import google from "../src/images/google.svg";
import facebook from "../src/images/facebook.svg";
import { Link } from "react-router-dom"
import "./App.css";

const SignIn = () => {
  return (
    <div className="signIn-container">
      <div className="signin-logo">
        <img src={exlogo} alt="extension-logo" />
      </div>
      <div className="form">
        <h2>Log in or Sign up</h2>
        <p>Join millions of others in sharing successful moves on HelpMeOut.</p>
        <div className="button-div">
          <button>
            <img src={google} alt="google-icon" />
            Continue with Google
          </button>
          <button>
            <img src={facebook} alt="facebook-icon" />
            Continue with Facebook
          </button>
        </div>
        <div className="line-div">
          <div></div>
          <p>or</p>
          <div></div>
        </div>
        <div className="inputs-div">
          <p>Email</p>
          <input placeholder="Enter your email address" />
          <p>Password</p>
          <input placeholder="Enter your Password" />
          <Link to="/VideoRepository">
          <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
