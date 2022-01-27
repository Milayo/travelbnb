import React from 'react';
import HeaderComponent from '../header/header';
import "./landingcomponent.scss";
import DataContext from '../../contexts/data/data.context';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

const LandingComponent = () => {
    return (
        <div id="home" className="landing-container">
            <HeaderComponent />
            <div className="landingpage-content">
                <p>Find Your Best Place To Go</p>
                <span>Enjoy Your Travel Holidays</span>
                <br/>
                <MDBBtn color="white" href="#" className="landingpage-button">Learn More</MDBBtn>
            </div>
        </div>
    )
}

export default LandingComponent;
