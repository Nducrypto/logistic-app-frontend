import * as api from "../Api/index.js";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    console.log(data);
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {
    console.log(error);
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
