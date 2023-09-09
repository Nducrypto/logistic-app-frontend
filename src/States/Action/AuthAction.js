import * as api from "../Api/index";

export const login =
  (formAuth, navigate, previousRoute) => async (dispatch) => {
    dispatch({ type: "LOGIN_START" });

    try {
      dispatch({ type: "START_LOADING" });

      const { data } = await api.login(formAuth);

      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      dispatch({ type: "END_LOADING" });

      navigate(previousRoute);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

export const register =
  (formAuth, navigate, previousRoute) => async (dispatch) => {
    try {
      dispatch({ type: "START_LOADING" });

      const { data } = await api.register(formAuth);

      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      dispatch({ type: "END_LOADING" });

      navigate(previousRoute);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });

      console.log(err);
    }
  };
