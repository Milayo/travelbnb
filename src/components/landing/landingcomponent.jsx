import React from 'react';
import HeaderComponent from '../header/header';
import { Link } from "react-scroll";
import "./landingcomponent.scss";
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

const LandingComponent = () => {
    return (
      <div id="home" className="landing-container">
        <HeaderComponent />
        <div className="landingpage-content">
          <p>Find Your Best Place To Go</p>
          <span>Enjoy Your Travel Holidays</span>
          <br />
          <Link to="learnmore" spy={true} smooth={true} duration={500}>
            <MDBBtn
              color="white"
              href="learnmore"
              className="landingpage-button"
            >
              Learn More
            </MDBBtn>
          </Link>
        </div>
      </div>
    );
}

export default LandingComponent;
