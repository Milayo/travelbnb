import BookingActionTypes from "./bookings.types";
import { addLocationToBookings, removeLocationFromBookings } from "./bookings.utils";

const INITIAL_STATE = {
  bookedLocations: [],
};

const bookingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case BookingActionTypes.ADD_TO_BOOKINGS:
        return {
          ...state,
          bookedLocations: addLocationToBookings(
            state.bookedLocations,
            action.payload
          ),
        };
      case BookingActionTypes.REMOVE_FROM_BOOKINGS:
        return {
          ...state,
          bookedLocations: removeLocationFromBookings(
            state.bookedLocations,
            action.payload
          ),
        };
      default:
        return state;
    }
}

export default bookingReducer;