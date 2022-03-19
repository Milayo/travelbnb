import React from 'react';
import { connect } from 'react-redux';
import "./bookingitem.scss";

import { removeLocation } from '../../redux/bookings/bookings.actions';

const BookingItem = ({ locationItem, removeLocation}) => {
    const { name, price, imageUrl } = locationItem;
  return (
    <div className="booking-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeLocation(locationItem)}>
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeLocation: (locationItem) => dispatch(removeLocation(locationItem)),
});

export default connect(null, mapDispatchToProps)(BookingItem)
  ;