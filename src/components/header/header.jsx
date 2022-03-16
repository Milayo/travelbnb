import React from 'react';
import { Link } from "react-scroll";
import { MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import './header.scss';


const HeaderComponent = () => {
    return (
      <header>
        <nav>
          <div className="header-icon-name">
            <MDBIcon fab icon="accusoft" size="2x" className="header-icon" />
            <span>Travel BNB</span>
          </div>

          <ul className="main-nav">
            <li>
              <Link to="search" spy={true} smooth={true} duration={500}>
                Search
              </Link>
            </li>
            <li>
              <Link to="places" spy={true} smooth={true} duration={500}>
                Places
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} duration={500}>
                Contact
              </Link>
            </li>
            <MDBBtn outline className="header-button" href="/register">
              REGISTER/LOGIN
            </MDBBtn>
          </ul>
        </nav>
      </header>
    );
}

export default HeaderComponent;
