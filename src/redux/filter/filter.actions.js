import FilterActionTypes from "./filter.types";

export const toggleFilterButton = () => ({
    type: FilterActionTypes.TOGGLE_FILTER_BUTTON
})

export const filterUnderHundred = () => ({
    type: FilterActionTypes.FILTER_UNDER_HUND,
})
export const filterAboveHundred = () => ({
  type: FilterActionTypes.FILTER_ABOVE_HUND,
});
export const restoreState = () => ({
  type: FilterActionTypes.RESTORE_STATE,
});

