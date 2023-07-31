import { Grid, Paper } from "@mui/material";
import React from "react";
import moment from "moment";

import { Container } from "@mui/system";
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
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          marginTop: { xs: "7rem", md: "5rem" },
        }}
      >
        <Grid item xs={11} sm={7} md={3} lg={3}>
          helllo
        </Grid>
        <Grid item xs={11} md={5} sm={11} lg={8}>
          <Container
            sx={{
              marginTop: "4rem",
              display: { lg: "flex", md: "flex", sm: "flex" },
              gap: "1rem",
            }}
          >
            {filteredPassengers.map((p) => (
              <div key={p._id}>
                <Paper
                  sx={{
                    borderRadius: "2rem",
                    padding: "0.7rem 1rem 1rem 1rem",
                    marginTop: "1rem",
                    backgroundColor: "red",

                    color: "white",
                  }}
                  elevation={12}
                >
                  <div className="historyCon">
                    <div>{p.departureTerminal}</div>
                    <div> {p.arrivalTerminal}</div>
                  </div>

                  <div className="historyCon">
                    <div>Phone</div>
                    <div>{p.phoneNumber}</div>
                  </div>
                  <div className="historyCon">
                    <div>Next Of Kin</div>
                    <div>{p.nextOfKinName}</div>
                  </div>
                  <div className="historyCon">
                    <div>Amount</div>
                    <div>&#8358;{Intl.NumberFormat().format(p.totalPrice)}</div>
                  </div>
                  <div className="historyCon">
                    <div>Booking Code</div>
                    <div> {p.bookingCode}</div>
                  </div>
                  <div className="historyCon">
                    <div>Date</div>
                    <div>{moment(p.date).format("dddd, MMM Do YYYY")}</div>
                  </div>

                  <div className="historyCon">
                    <div>seatNumber(s)</div>
                    <div style={{ display: "flex" }}>
                      {p.bookedSeat.join(",")}
                    </div>
                  </div>
                </Paper>
              </div>
            ))}
          </Container>
        </Grid>
      </Grid>
      <Subscribe />
    </div>
  );
};

export default BookingHistory;
