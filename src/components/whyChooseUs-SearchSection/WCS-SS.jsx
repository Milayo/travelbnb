import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "./WCS-SS.scss";
import WCSCard from "./WCSCard";

const WCSSSComponent = () => {
  return (
    <div>
      <div className="wcsscomponent" id="about">
        <p className="title"> Why Choose Us</p>
        <div className="cards-container">
          <WCSCard cardIcon="handshake" title="Friendly Guide" />
          <WCSCard cardIcon="money-bill-wave" title="Money Refund" />
          <WCSCard cardIcon="hands-helping" title="Best Price Guaranteed" />
        </div>
      </div>
      <div className="wcssinput-section">
        <div className="wcssinput-container">
          <MDBIcon icon="map-marker-alt" className="wcssinput-icon" />
          <input
            className="wcssinput"
            type="text"
            placeholder="Find Destinations"
            aria-label="Search"
          />
        </div>
        <MDBBtn href="#" color="deep-orange" className="wcssinput-button">
          Search
        </MDBBtn>
      </div>
    </div>
  );
};

export default WCSSSComponent;
