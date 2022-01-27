import React from "react";
import "./WCSCard.scss";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const WCSCard = ({ cardIcon, title }) => {
  return (
    <div className="wcscard">
      <div>
        <div className="icon-cover">
          <MDBIcon icon={cardIcon} size="1x" className="wscard-icon" />
        </div>
      </div>
      <p className="wcscard-title">{title}</p>
      <p className="wcscard-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        iure.
      </p>
      <MDBBtn href="#" color="deep-orange" className="wcscard-button">
        See More
      </MDBBtn>
    </div>
  );
};

export default WCSCard;
