import { Grid, Paper } from "@mui/material";
import React from "react";
import moment from "moment";

import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import Subscribe from "../Subscribe/Subscribe";

const BookingHistory = () => {
  const { passenger } = useSelector((state) => state.passengers);
  const user = JSON.parse(localStorage.getItem("profile"));

  const creator = user?.result._id;

  const filter = passenger.filter((p) => p.creator === creator);

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
            {filter.map((p) => (
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      {p.departureTerminal}
                    </div>
                    <div> {p.arrivalTerminal}</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "1rem",
                    }}
                  >
                    <div>{moment(p.date).format("dddd, MMMM Do YYYY")}</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "1rem",
                    }}
                  >
                    <div>Phone</div>
                    <div>{p.phoneNumber}</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "1rem",
                    }}
                  >
                    <div>Next Of Kin</div>
                    <div>{p.nextOfKinName}</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "1rem",
                    }}
                  >
                    <div>Number</div>
                    <div>{p.nextOfKinNumber}</div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "1rem",
                    }}
                  >
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
