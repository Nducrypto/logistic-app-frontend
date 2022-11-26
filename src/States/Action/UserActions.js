import * as api from "../Api/index.js";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_TRUE" });

    const { data } = await api.fetchUsers();
    dispatch({ type: "FETCH_USERS", payload: data });
    dispatch({ type: "LOADING_FALSE" });
  } catch (error) {
    console.log(error);
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchUser(id);

    dispatch({ type: "FETCH_USER_BY_ID", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (id, update) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_TRUE" });

    const { data } = await api.updateUser(id, update);
    dispatch({ type: "UPDATE_USER", payload: data });
    dispatch({ type: "FETCH_USER_BY_ID", payload: data });

    dispatch({ type: "LOADING_FALSE" });
  } catch (err) {
    dispatch({ type: "SET_ERROR", payload: err.response.data.message });
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
