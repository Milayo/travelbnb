import React from "react";
import { useHistory } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import "./destinationOverviewItem.scss";

const DestinationItem = ({ locationItem }) => {
  const { name, imageUrl, price, routeName } = locationItem;
  const history = useHistory();
  return (
    <div className="destination-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="destination-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <MDBBtn
        className="destination-btn"
        color="deep-orange"
        onClick={() => {
          history.push(`/destination/${routeName}`);
        }}
      >
        SEE MORE
      </MDBBtn>
    </div>
  );
};

export default DestinationItem;
