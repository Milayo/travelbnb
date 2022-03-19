import React from "react";
import { connect } from "react-redux";
import DestinationComponent from "../../components/destination/destinationComponent";


const DestinationPage = ({ match, locations, currentUser }) => {
  const path = match.params.id;

  console.log(path);
  return (
    <div>
      {locations
        .filter((locationItem) => locationItem.routeName === path)
        .map((locationItem) => (
          <DestinationComponent currentUser={currentUser} locationItem={locationItem} key={locationItem.id}/>
        ))}
    </div>
  );
};

const mapStateToProps = ({ filter }) => ({
  locations: filter.Locations,
});

export default connect(mapStateToProps)(DestinationPage);
