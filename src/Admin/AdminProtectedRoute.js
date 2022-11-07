import React from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return <>{user?.result.isAdmin ? children : <Navigate to="/" />}</>;
};

export default AdminProtectedRoute;
