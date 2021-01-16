import React from "react";
import "./Contact.css";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="container contact">
      <div className="title">
        <h1>Contact Info</h1>
        <h4>
          Feel free to contact me for career prospects, business services, and
          other professional inquiries!
        </h4>
      </div>
      <div className="contact-info">
        <div className="row">
          {/* Column 1 */}
          <div className="col"></div>

          {/* Column 2 */}
          <div className="col icons">
            <a href="https://github.com/aravind-cod-101">
              <FaGithub id="github" />
            </a>
            <a href="https://www.instagram.com/__karma.____">
              <FaInstagram id="instagram" />
            </a>
            <a href="https://www.linkedin.com/in/aravind-balaji-7b37491a0/">
              <FaLinkedin id="linkedin" />
            </a>
            <div>Copyright - 2021 Aravind Balaji, All Rights Reserved</div>
          </div>

          {/* Column 3 */}
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
