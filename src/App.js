import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Bookings from "./Components/Bookings/Bookings";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import ProtectedRoute from "./Admin/ProtectedRoute";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

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
          path="/bookinghistory"
          element={user?.result ? <BookingHistory /> : <Navigate to="/" />}
        />

        <Route
          path="/passenger"
          element={user?.result ? <PassengerInfo /> : <Navigate to="/" />}
        />

        <Route
          path="/select-bus"
          element={user?.result ? <Bookings /> : <Navigate to="/" />}
        />
        {/* <Route path="/:id" exact component={Detail} /> */}
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/allbookings"
          element={
            <ProtectedRoute>
              <AllBookings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/formadmin"
          element={
            <ProtectedRoute>
              <FormAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/locations"
          element={
            <ProtectedRoute>
              <Locations />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Subscribe />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
