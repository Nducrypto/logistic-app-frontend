import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Bookings from "./Components/Bookings/Bookings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Subscribe from "./Components/Subscribe/Subscribe";
import PassengerInfo from "./Components/PassengerInfo/PassengerInfo";
import Auth from "./Components/Auth/Auth";
import BookingHistory from "./Components/BookingHistory/BookingHistory";
// import { getBookings } from "./States/Action/BookingActions";
// import { useDispatch } from "react-redux";

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getBookings());
  // }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookinghistory" element={<BookingHistory />} />

        <Route path="/passenger" element={<PassengerInfo />} />

        <Route path="/select-bus" element={<Bookings />} />
        {/* <Route path="/:id" exact component={Detail} /> */}
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Subscribe />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
