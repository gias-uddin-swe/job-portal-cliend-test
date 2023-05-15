import React from "react";
import { useState } from "react";
import "./SocialLoginBtn.css";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";


const SocialLoginBtn = () => {

  return (
    <div className=" social-button-container w-50 mt-3">
      <div className="">
        <img
        
          className=" social-button"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
      <div className="">
        <img
          className=" social-button"
          src="https://i.ibb.co/g9f4P0S/github-btn.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialLoginBtn;
