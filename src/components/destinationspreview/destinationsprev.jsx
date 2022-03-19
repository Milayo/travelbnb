import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./destinationsprev.scss";
import { MDBIcon } from "mdb-react-ui-kit";
import DataContext from "../../contexts/data/data.context";
import CardComponent from "../card/card";

const DestinationsPreview = () => {
  const TRAVEL_DATA = useContext(DataContext);

  const history = useHistory();
  return (
    <div id="places" className="destinationsprev">
      <p className="destinationsprev-title">Popular Destinations</p>
      <div className="cards-section">
        {TRAVEL_DATA.Locations.filter((location, id) => id < 6).map(
          (location) => (
            <CardComponent key={location.id} location={location} />
          )
        )}
      </div>
      <MDBIcon
        icon="chevron-circle-right"
        size="3x"
        className="destinations-icon"
        onClick={() => {
          history.push("/overview");
        }}
      />
    </div>
  );
};

export default DestinationsPreview;
