import { combineReducers } from "redux";

import bookings from "./bookings";
import authReducer from "./AuthReducer";

export default combineReducers({ bookings, authReducer });
