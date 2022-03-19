import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filterReducer from "./filter/filter.reducer";
import bookingReducer from './bookings/bookings.reducer.js'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["booking"]
}

const rootReducer = combineReducers({
    filter: filterReducer,
    booking: bookingReducer
})

export default persistReducer(persistConfig, rootReducer);