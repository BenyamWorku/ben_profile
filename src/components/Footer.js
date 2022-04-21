import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  } from "@fortawesome/free-solid-svg-icons";

import {
 
  faTwitter,
  faInstagram,
  faReddit,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import astronaut from "../images/astronaut.png";
export default function Footer() {
    return (
      <div className='footer-wrapper'>
        <div className='social-icons'>
          <FontAwesomeIcon
            style={{
              padding: "5px",
              background: "white",
              color: "black",
              fontSize: "20px",
            }}
            icon={faTwitter}
          />

          <FontAwesomeIcon
            style={{
              padding: "5px",
              background: "gray",
              color: "white",
              fontSize: "20px",
            }}
            icon={faInstagram}
          />
          <FontAwesomeIcon
            style={{
              padding: "5px",
              background: "black",
              color: "white",
              fontSize: "20px",
            }}
            icon={faReddit}
          />
          <FontAwesomeIcon
            style={{
              padding: "5px",
              background: "black",
              color: "white",
              fontSize: "20px",
            }}
            icon={faFacebook}
          />
        </div>
      </div>
    );
}
