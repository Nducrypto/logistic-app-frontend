import React, { useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { getLocations } from "./States/Action/LocationActions";
import { useDispatch } from "react-redux";
import { getUsers } from "./States/Action/UserActions";
import { getAllBookings } from "./States/Action/PassengerActions";
import {
  Users,
  AllBookings,
  FormAdmin,
  Locations,
  AdminProtectedRoute,
  UserProtectedRoute,
} from "./Admin";
import {
  SelectBus,
  Home,
  Navbar,
  Footer,
  PassengerInfo,
  Auth,
  BookingHistory,
  Profile,
} from "./Components/index";
import ScrollRestoration from "./Components/ScrollRestoration";

const App = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const location = useLocation();

  const AuthProtected = ({ children }) => {
    if (!user?.result) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  };

  useEffect(() => {
    JSON.parse(localStorage.getItem("profile"));
    dispatch(getLocations());
    dispatch(getUsers());
    dispatch(getAllBookings());
  }, [location, dispatch]);

  return (
    <div>
      <ScrollRestoration />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <UserProtectedRoute>
              <Profile />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/bookinghistory"
          element={
            <UserProtectedRoute>
              <BookingHistory />
            </UserProtectedRoute>
          }
        />

        <Route
          path="/passenger"
          element={
            <UserProtectedRoute>
              <PassengerInfo />
            </UserProtectedRoute>
          }
        />

        <Route
          path="/select-bus"
          element={
            <UserProtectedRoute>
              <SelectBus />
            </UserProtectedRoute>
          }
        />

        <Route
          path="/auth"
          element={
            <AuthProtected>
              <Auth />
            </AuthProtected>
          }
        />
        {/* ======ADMIN PROTECTED ROUTE=== */}
        <Route
          path="/users"
          element={
            <AdminProtectedRoute>
              <Users />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/allbookings"
          element={
            <AdminProtectedRoute>
              <AllBookings />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/formadmin"
          element={
            <AdminProtectedRoute>
              <FormAdmin />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/locations"
          element={
            <AdminProtectedRoute>
              <Locations />
            </AdminProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
