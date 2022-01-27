import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { MDBInputGroup, MDBContainer } from "mdbreact";
import "./footer.scss";

const Footer = () => {
  return (
    <div id="contact">
      <div className="call-section">
        <MDBIcon icon="headset" className="call-icon" size="4x" />
        <div className="call-support-text">
          <p className="call-text">Call Now: +111 111 111</p>
          <p className="support-text">24/7 support</p>
        </div>
      </div>
      <div className="footer">
        <div className="footer-input">
          <MDBInputGroup
            containerClassName="mb-3"
            append="Send"
            hint="Your Email Address"
          />
        </div>
        <MDBContainer className="footer-content">
          <div className="follow-us">
            <p>Follow Us</p>
            <MDBIcon
              fab
              icon="facebook-f"
              size="2x"
              className="follow-icon"
              style={{ backgroundColor: "blue", padding: "10px" }}
            />
            <MDBIcon
              fab
              icon="google-plus-g"
              size="2x"
              style={{ backgroundColor: "rgb(194, 74, 74)" }}
              className="follow-icon"
            />
            <MDBIcon
              fab
              icon="twitter"
              size="2x"
              className="follow-icon"
              style={{ backgroundColor: "lightBlue" }}
            />

            <MDBIcon
              fab
              icon="youtube"
              size="2x"
              className="follow-icon"
              style={{ backgroundColor: "red" }}
            />
          </div>
          <ul>
            <li>Contact Us</li>
            <li>travelbnb@gmail.com</li>
            <li>+111 111 111 000</li>
          </ul>
          <ul>
            <li>Terms and Conditions</li>
            <li>About Us</li>
          </ul>
          <ul>
            <li>Our Community</li>
            <li>Blog</li>
            <li>Forums</li>
          </ul>
          <ul>
            <li>Quick Links</li>
            <li>Home</li>
            <li>Place</li>
            <li>About</li>
          </ul>
        </MDBContainer>
      </div>
    </div>
  );
};

export default Footer;
