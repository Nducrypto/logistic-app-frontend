import * as api from "../Api/index.js";

export const getAllBookings = () => async (dispatch) => {
  try {
    dispatch({ type: "START_PASSENGER_LOADING" });

    const { data } = await api.fetchAllBoookings();

    dispatch({ type: "FETCH_ALL_BOOKINGS", payload: data });
    dispatch({ type: "END_PASSENGER_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

export const createPassengerBooking =
  (booking, navigate) => async (dispatch) => {
    try {
      const { data } = await api.createPassengerBooking(booking);
      dispatch({ type: "CREATE_PASSENGER_BOOKINGS", payload: data });
      navigate("/bookinghistory");
      sessionStorage.clear("booking-info");
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

export const deletePassengerBookings = (id) => async (dispatch) => {
  console.log(id);
  try {
    await api.deletePassengerBookings(id);
    dispatch({ type: "DELETE_PASSENGER_BOOKING", payload: id });
  } catch (err) {
    dispatch({ type: "SET_ERROR", payload: err.response.data.message });
    console.log(err.response.data.message);
  }
};
