import { Paper } from "@mui/material";
import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import Subscribe from "../Subscribe/Subscribe";
import "./bookingHistory.css";

const BookingHistory = () => {
  const { passenger } = useSelector((state) => state.passengers);
  const user = JSON.parse(localStorage.getItem("profile"));

  const creator = user?.result._id;

  const filteredPassengers = passenger.filter(
    (customer) => customer.creator === creator
  );

  return (
    <div>
      <div className="booking-history-container">
        {filteredPassengers.map((passenger) => (
          <div key={passenger._id}>
            <Paper
              sx={{
                borderRadius: "2rem",
                padding: "0.7rem 1rem 1rem 1rem",
                marginTop: "1rem",
                backgroundColor: "orangered",
                color: "white",
              }}
              elevation={12}
            >
              <div className="historyCon">
                <div>{passenger.departureTerminal}</div>
                <div> {passenger.arrivalTerminal}</div>
              </div>

              <div className="historyCon">
                <div>Phone</div>
                <div>{passenger.phoneNumber}</div>
              </div>
              <div className="historyCon">
                <div>Next Of Kin</div>
                <div>{passenger.nextOfKinName}</div>
              </div>
              <div className="historyCon">
                <div>Amount</div>
                <div>
                  &#8358;{Intl.NumberFormat().format(passenger.totalPrice)}
                </div>
              </div>
              <div className="historyCon">
                <div>Booking Code</div>
                <div> {passenger.bookingCode}</div>
              </div>
              <div className="historyCon">
                <div>Date</div>
                <div>{moment(passenger.date).format("dddd, MMM Do YYYY")}</div>
              </div>

              <div className="historyCon">
                <div>seatNumber(s)</div>
                <div style={{ display: "flex" }}>
                  {passenger.bookedSeat.join(",")}
                </div>
              </div>
            </Paper>
          </div>
        ))}
      </div>
      <Subscribe />
    </div>
  );
};

export default BookingHistory;
