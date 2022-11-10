import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
  Bookings,
  Home,
  Navbar,
  Footer,
  PassengerInfo,
  Auth,
  BookingHistory,
  Profile,
} from "./Components/index";

const App = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const AuthProtected = ({ children }) => {
    if (!user?.result) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  };

  useEffect(() => {
    dispatch(getLocations());
    dispatch(getUsers());
    dispatch(getAllBookings());
  }, [dispatch]);

  return (
    <div>
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
              <Bookings />
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
