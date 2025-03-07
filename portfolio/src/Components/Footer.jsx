import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer-sect">
      <div className="foot-left">
        <div className="social-icons">
          <a href="https://github.com/mukuvi">
            <FaGithub size={30} className="social-icon" />
          </a>
          <a href="https://twitter.com/Mukuvi_">
            <FaXTwitter size={30} className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/james-ngandu">
            <FaLinkedin size={30} className="social-icon" />
          </a>
        </div>
      </div>
      <div className="foot-right">
        <p>
          &copy; {new Date().getFullYear()} James Ngandu. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
