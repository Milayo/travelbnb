import BookingActionTypes from "./bookings.types";

export const addLocation = (locationItem) => ({
    type: BookingActionTypes.ADD_TO_BOOKINGS,
    payload: locationItem
})

export const removeLocation = (locationItem) => ({
  type: BookingActionTypes.REMOVE_FROM_BOOKINGS,
  payload: locationItem,
});

export const clearLocation = (locationItem) => ({
  type: BookingActionTypes.CLEAR_BOOKINGS,
  payload: locationItem,
});