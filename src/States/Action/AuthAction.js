import * as api from "../Api/index";

export const login = (formAuth, history) => async (dispatch) => {
  dispatch({ type: "LOGIN_START" });

  try {
    const { data } = await api.login(formAuth);

    dispatch({ type: "LOGIN_SUCCESS", payload: data });

    history.push("/");
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  }
};

export const register = (formAuth, history) => async (dispatch) => {
  try {
    const { data } = await api.register(formAuth);
    console.log(data);

    dispatch({ type: "LOGIN_SUCCESS", payload: data });

    history.push("/");
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });

    console.log(err);
  }
};
