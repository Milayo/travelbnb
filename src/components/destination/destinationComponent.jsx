import React from "react";
import { connect } from "react-redux";
import {useHistory} from "react-router-dom"
import "./destination.scss";

import { MDBBtn } from "mdb-react-ui-kit";
import { addLocation } from "../../redux/bookings/bookings.actions";

const DestinationComponent = ({ locationItem, currentUser, addLocation, }) => {
  const history = useHistory();
  const handleAction = () => {
    addLocation(locationItem);
    history.push("/booking")
 }
  return (
    <div className="component">
      <h3>{locationItem.name}</h3>
      <div className="subcomponent">
        <div className="content">
          <img alt="img" src={locationItem.imageUrl} />
          <div className="text-section">
            <h4>{locationItem.name}</h4>
            <br />
            <h6>About {locationItem.name}</h6>
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
            <div>
              <span>Price: ${locationItem.price}</span>
              <br/>
              <MDBBtn className="item-btn" color="deep-orange" 
                disabled={currentUser}
               onClick={handleAction}>
                ADD TO BOOKINGS
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addLocation: locationItem => dispatch(addLocation(locationItem))
})

export default connect(null, mapDispatchToProps)(DestinationComponent);
