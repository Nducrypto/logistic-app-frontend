import { combineReducers } from "redux";

// import bookings from "./bookings";
import locations from "./locationreducer";
import authReducer from "./AuthReducer";
import allUsers from "./UserReducer";
import passengers from "./passengerbookinreducer";

export default combineReducers({
  locations,
  passengers,
  authReducer,
  allUsers,
});
