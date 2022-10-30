import React, { createContext, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { loading, error } = useSelector((state) => state.authReducer);

  const user = JSON.parse(localStorage.getItem("profile"));

  const dispatch = useDispatch();
  return (
    <AuthContext.Provider
      value={{
        loading,
        error,
        user,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
