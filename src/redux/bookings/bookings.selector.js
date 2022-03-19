import { createSelector } from "reselect";

const selectBookings = (state) => state.booking;

export const selectBookingItems = createSelector(
  [selectBookings],
 booking => booking.bookedLocations
);

export const selectBookingCost = createSelector(
  [selectBookingItems],
  (bookedLocations) => bookedLocations.reduce((accumulatedQuantity, locationItem)=> accumulatedQuantity + locationItem.price, 0)
);
