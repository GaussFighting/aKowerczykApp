import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function SocialMedia(props) {
  return (
    <div>
      {/* <span>
        <a
          className={`socialmedia-icon ${props.color}`}
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          {`   `}
        </a>
      </span> */}
      <span>
        <a
          className={`socialmedia-icon ${props.color}`}
          href="https://www.linkedin.com/in/agata-kowerczyk-a82022137/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </span>
    </div>
  );
}
export default SocialMedia;
