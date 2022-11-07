import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Bookings from "./Components/Bookings/Bookings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Subscribe from "./Components/Subscribe/Subscribe";
import PassengerInfo from "./Components/PassengerInfo/PassengerInfo";
import Auth from "./Components/Auth/Auth";
import BookingHistory from "./Components/BookingHistory/BookingHistory";
import { getLocations } from "./States/Action/LocationActions";
import { useDispatch } from "react-redux";
import Users from "./Admin/Users/Users";
import { getUsers } from "./States/Action/UserActions";
import AllBookings from "./Admin/Users/AllBookings/AllBookings";
import FormAdmin from "./Admin/FormAdmin/FormAdmin";
import { getAllBookings } from "./States/Action/PassengerActions";
import Locations from "./Admin/Locations/Locations";
import AdminProtectedRoute from "./Admin/AdminProtectedRoute";
import UserProtectedRoute from "./Admin/UserProtectedRoute";
import Profile from "./Components/Profile/Profile";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocations());
    dispatch(getUsers());
    dispatch(getAllBookings());
  }, [dispatch]);

  return (
    <BrowserRouter>
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

        <Route path="/auth" element={<Auth />} />
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
      </Routes>
      <Subscribe />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
