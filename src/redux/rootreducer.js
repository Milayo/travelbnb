import { combineReducers } from "redux";
import filterReducer from "./filter/filter.reducer";

const rootReducer = combineReducers({
filter: filterReducer
})

export default rootReducer;