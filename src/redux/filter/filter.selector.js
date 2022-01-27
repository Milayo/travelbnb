import { createSelector } from "reselect";

const selectLocations = state => state.Locations;

export const selectLocationRoutename = createSelector(
  [selectLocations],
  (Locations) => Locations.routeName
);

