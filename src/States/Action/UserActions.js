import * as api from "../Api/index.js";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });

    const { data } = await api.fetchUser(id);
    console.log(data);

    dispatch({ type: "FETCH_USER_BY_ID", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (id, update) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, update);
    // console.log(data);
    dispatch({ type: "UPDATE_USER", payload: data });
  } catch (err) {
    dispatch({ type: "SET_ERROR", payload: err.data.message });
  }
};
// export const deleteUser = (id) => async (dispatch) => {
//   try {
//     await api.deleteUser(id);

//     dispatch({ type: "DELETE", payload: id });
//   } catch (error) {
//     console.log(error);
//   }
// };
