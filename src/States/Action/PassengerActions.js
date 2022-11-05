import * as api from "../Api/index.js";

export const getAllBookings = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllBoookings();
    console.log(data);
    dispatch({ type: "FETCH_ALL_BOOKINGS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPassengerBooking = (booking) => async (dispatch) => {
  try {
    const { data } = await api.createPassengerBooking(booking);
    console.log(data);
    dispatch({ type: "CREATE_PASSENGER_BOOKINGS", payload: data });
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const deletePassengerBookings = (id) => async (dispatch) => {
  try {
    await api.deletePassengerBookings(id);

    dispatch({ type: "DELETE_PASSENGER_BOOKING", payload: id });
  } catch (err) {
    dispatch({ type: "SET_ERROR", payload: err.response.data.message });

    console.log(err.response.data.message);
  }
};
