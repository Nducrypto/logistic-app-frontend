import * as api from "../Api/index.js";

export const getLocations = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLocations();

    dispatch({ type: "FETCH_LOCATIONS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createLocations = (booking) => async (dispatch) => {
  try {
    const { data } = await api.createLocations(booking);

    dispatch({ type: "CREATE_LOCATIONS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteLocations = (id) => async (dispatch) => {
  try {
    await api.deleteLocations(id);

    dispatch({ type: "DELETE_LOCATIONS", payload: id });
  } catch (err) {
    dispatch({ type: "SET_ERROR", payload: err.response.data.message });

    // console.log(err.response.data.message);
  }
};
