import React, { useEffect, useState, useRef } from "react";
import "./intro.scss";
import Typewriter from 'typewriter-effect';

export default function Intro({menuOpen}) {

  return (
    <div className="intro" id="intro">
      <div className={`left`}>
        <div className={`imgContainer ${menuOpen && "mainColor"}`}>
          <img src={menuOpen ? "assest/coding_red.svg" : "assest/coding.svg"} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Abiodun Adedokun</h1>
          <h3>
            Freelance <span>
            <Typewriter 
           
           options={{ 
           strings:["Developer", "Business Analyst", "Content Creater"],
           autoStart:true,
           delay:75,
           loop:true
           }}
           
           />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assest/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
