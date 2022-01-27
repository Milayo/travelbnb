import FilterActionTypes from "./filter.types";
import TRAVEL_DATA from "../../contexts/data/data";

const INITIAL_STATE = {
    hidden: false,
    Locations: TRAVEL_DATA.Locations, 
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.TOGGLE_FILTER_BUTTON:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case FilterActionTypes.FILTER_UNDER_HUND:
      return {
        ...state,
        Locations: state.Locations.filter((location) => location.price < 100),
      };
    case FilterActionTypes.FILTER_ABOVE_HUND:
      return {
        ...state,
        Locations: state.Locations.filter((location) => location.price > 100),
      };
    case FilterActionTypes.RESTORE_STATE:
      return {
        ...state,
        Locations: TRAVEL_DATA.Locations
      };
    default:
      return state;
  }
};

export default filterReducer;
