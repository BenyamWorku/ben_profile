/** @format */

// ----install these first----
//npm i--save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i--save @fortawesome/free-brands-svg-icons

import React from "react";
import "./header.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import astronaut from "../images/astronaut.png";
// import outdoorphoto from '../images/outdoorphoto.jpg'
export default function Header() {
  return (
    <div className='header-wrapper'>
      <img src={astronaut} alt='astronaut' />
      <h1 className='my-name'>Benstronaut</h1>
      <h2 className='role'>Techie</h2>

      <p>
        <a className='website' href='#'>
          www.benmakes.com
        </a>
      </p>
      <div className='button-class'>
        <div className='icon-text-spacer'>
          <button className='email'>
            <FontAwesomeIcon
              style={{
                background: "white",
                color: "black",
                marginRight: "7px",
              }}
              icon={faEnvelope}
            />
            Email
          </button>
        </div>
        <div className='icon-text-spacer'>
          <button className='linkedin'>
            <FontAwesomeIcon
              style={{
                background: "#5093E2",
                color: "white",
                marginRight: "10px",
              }}
              icon={faLinkedin}
            />
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}
