import React from "react";
import { Navigate } from "react-router-dom";

const UserProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return <>{user?.result ? children : <Navigate to="/" />}</>;
};

export default UserProtectedRoute;
