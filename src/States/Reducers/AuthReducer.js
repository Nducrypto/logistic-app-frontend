const AuthReducer = (
  authReducer = {
    authData: null || JSON.parse(localStorage.getItem("profile")),
    loading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...authReducer, authData: null, loading: false, error: null };
    case "LOGIN_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return {
        ...authReducer,
        authData: action.payload,
        loading: true,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...authReducer,
        authData: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      localStorage.clear();
      return { ...authReducer, authData: null, loading: false, error: false };

    default:
      return authReducer;
  }
};

export default AuthReducer;
