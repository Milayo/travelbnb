import React from "react";
import "./destination.scss";

import { MDBBtn } from "mdb-react-ui-kit";

const DestinationComponent = ({ locationItem }) => {
  console.log(locationItem);
  return (
    <div className="component">
      <h3>{locationItem.name}</h3>
      <div className="subcomponent">
        <div className="content">
          <img src={locationItem.imageUrl} />
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
              <MDBBtn className="item-btn" color="deep-orange" href="#">
                BOOK LOCATION
              </MDBBtn>
              <MDBBtn className="item-btn" color="deep-orange" href="#">
                ADD TO BOOKINGS
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationComponent;
