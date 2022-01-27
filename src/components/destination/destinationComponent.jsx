import React from "react";
import { connect } from "react-redux";

const DestinationComponent = ({ locations }) => {
  return (
    <div>
      {locations.map((locationItem) => {
        <div>
          <img src={locationItem.imageUrl} />
          <p>{locationItem.title}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            blanditiis quasi cupiditate fugiat. Dolores veritatis consequuntur
            exercitationem unde amet sequi doloribus officiis praesentium
            accusantium aliquid. Optio ad maiores quod mollitia. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Maiores libero quos
            laboriosam laborum iure harum, assumenda nisi sequi qui quasi
            accusantium perspiciatis nemo aliquid voluptatum aliquam dicta
            similique vitae quam.
          </p>
        </div>;
      })}
    </div>
  );
};

const mapStateToProps = ({ filter }) => ({
  locations: filter.Locations,
});

export default connect(mapStateToProps)(DestinationComponent);
