import React from "react";
import { connect } from "react-redux";
import DestinationComponent from "../../components/destination/destinationComponent";


const DestinationPage = ({ match, locations }) => {
  const path = match.params.id;

  console.log(path);
  return (
    <div>
      {locations
        .filter((locationItem) => locationItem.routeName === path)
        .map((locationItem) => (
          <DestinationComponent locationItem={locationItem} />
        ))}
    </div>
  );
};

const mapStateToProps = ({ filter }) => ({
  locations: filter.Locations,
});

export default connect(mapStateToProps)(DestinationPage);
