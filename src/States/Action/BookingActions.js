import * as api from "../Api/index.js";

export const getBookings = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBookings();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getBookingById = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchBookingById(id);
    console.log(data);

    dispatch({ type: "FETCH_ONE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createBooking = (booking) => async (dispatch) => {
  try {
    const { data } = await api.createBooking(booking);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBooking = (id) => async (dispatch) => {
  try {
    await api.deleteBooking(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
