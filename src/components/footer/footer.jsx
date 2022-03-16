import React from "react";
import { MDBIcon, MDBBtn} from "mdb-react-ui-kit";
import { Link } from "react-scroll";
import { MDBInputGroup, MDBContainer} from "mdbreact";
import "./footer.scss";

const Footer = (e) => {
  console.log(e.target)
  const SubscribeFunc = () => {
    alert("Thanks for subscribing!");
  }
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
            hint="Your Email Address"
            type="email"
            value={e.target}
            name='email'
            append={
              <MDBBtn
                color="deep-orange"
                className="m-0 px-3 py-2 z-depth-0 footer-btn"
                onClick={SubscribeFunc}
              >
                Subscribe
              </MDBBtn>
            }
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
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="places"
                spy={true}
                smooth={true}
                duration={500}
                className="link"
              >
                Places
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="link"
              >
                About
              </Link>
            </li>
          </ul>
        </MDBContainer>
      </div>
    </div>
  );
};

export default Footer;
