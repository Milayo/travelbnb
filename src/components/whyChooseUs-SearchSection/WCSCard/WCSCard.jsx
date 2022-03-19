import React from "react";
import "./WCSCard.scss";
import { MDBIcon } from "mdb-react-ui-kit";

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
    </div>
  );
};

export default WCSCard;
