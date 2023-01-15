import { Button, Grid, Typography, TextField, Paper } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { useStateContext } from "../../States/Contexts/ContextProvider";
import { createPassengerBooking } from "../../States/Action/PassengerActions";
import { useDispatch } from "react-redux";
import { useAuthContext } from "../../States/Contexts/AuthContext";
import Subscribe from "../Subscribe/Subscribe";

const PassengerInfo = () => {
  const { form, setForm } = useStateContext();
  const location = useLocation();
  const selectedSeats = location.state.selectedSeats;
  const date = location.state.date;
  const adults = location.state.adults;
  const departureTerminal = location.state.departureTerminal;
  const arrivalTerminal = location.state.arrivalTerminal;
  const bookedSeat = location.state.bookedSeat;

  const navigate = useNavigate();
  const { user } = useAuthContext();
  const creator = user?.result._id;

  const { API, data } = useFetch(
    `/page?departureTerminal=${departureTerminal}&arrivalTerminal=${arrivalTerminal}`
  );
  const dispatch = useDispatch();

  const totalPrice = (p) => {
    return p * adults;
  };

  const handleSubmit = () => {
    dispatch(
      createPassengerBooking({
        date,
        adults,
        departureTerminal,
        arrivalTerminal,
        selectedSeats,
        bookedSeat,
        creator,
        totalPrice: totalPrice(),
        ...form,
      })
    );
  };

  // =====UPDATE/BOOK SEAT NUMBER
  const handleClick = async () => {
    try {
      await Promise.all(
        selectedSeats.map((seatId) => {
          const { data } = API.put(`/page/availability/${seatId}`, {
            date,
          });
          return data;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <div style={{ marginTop: "9rem" }}>
        <Typography
          sx={{ fontWeight: "600", textAlign: "center", fontSize: "1.3rem" }}
        >
          Hi Guest, we just need few more details about you
        </Typography>

        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={11} md={7} sm={8} lg={7} sx={{ marginTop: "1rem" }}>
            <div>
              <Typography
                sx={{
                  marginTop: "2rem",
                  fontWeight: "600",
                  fontSize: "1.3rem",
                }}
              >
                Passenger Details
              </Typography>
              <div>
                Please enter name as they appear on identification document
              </div>

              {/* =========ENTER FULL NAME TEXTFIELD===== */}

              <Paper
                sx={{
                  marginTop: "1rem",
                  height: "9rem",
                  width: { md: "30rem" },
                }}
              >
                <div style={{ marginTop: "2.7rem" }}>Full Name</div>
                <TextField
                  label="Enter Full Name"
                  id="fullName"
                  fullWidth
                  required
                  onChange={handleChange}
                />
              </Paper>
            </div>

            <Typography sx={{ fontWeight: "600", fontSize: "1.3rem" }}>
              Contact and Next of Kin Details
            </Typography>
            <Typography sx={{ fontWeight: "600", marginTop: "1rem" }}>
              We need your contact details for booking confirmation
            </Typography>
            <Paper sx={{ width: { md: "30rem" } }}>
              <div style={{ marginTop: "1rem" }}>Customers Email Address</div>
              <TextField
                label="email"
                id="email"
                type="email"
                fullWidth
                required
                onChange={handleChange}
              />

              {/* ========PHONE NUMBER====== */}
              <div style={{ marginTop: "1rem" }}>Customers Phone Number</div>
              <TextField
                id="phoneNumber"
                type="number"
                onChange={handleChange}
                fullWidth
              />

              {/* =========NEXT OF KIN NAME====== */}
              <div style={{ marginTop: "1rem" }}>Next Of Kin Name</div>
              <TextField id="nextOfKinName" onChange={handleChange} fullWidth />

              {/* =========NEXT OF KIN NUMBER====== */}
              <div style={{ marginTop: "1rem" }}>
                Next of Kin's Mobile Phone Number
              </div>
              <TextField
                id="nextOfKinNumber"
                type="number"
                onChange={handleChange}
                required
                fullWidth
              />
            </Paper>

            {/* =======TERMS AND CONDITIONS======= */}
            <div>
              <Typography
                paragraph
                sx={{
                  fontWeight: "600",
                  fontSize: "1.3rem",
                  marginTop: "2rem",
                }}
              >
                Terms and Condition
              </Typography>
              <Typography>
                Please Note that M&E MOTORS does not have a refund policy,
                <br /> However, our tickets valid for a Month. By proceeding to
                Make Payment,
                <br /> You agree to the Terms and conditions of NDUM
              </Typography>
            </div>
          </Grid>

          {/* ========TRAVEL DETAILS GRID ITEM====== */}
          <Grid item xs={11} md={4} sm={8} lg={4}>
            <Paper
              sx={{
                marginTop: { xs: "1rem", lg: "-8rem" },
                borderRadius: "2rem",
                padding: "1rem 1rem 1rem 1rem",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "1.3rem",
                  marginTop: "1rem",
                }}
              >
                Trip Summary
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                <div>from</div>
                <div>{departureTerminal}</div>
              </div>

              {/* ===== ARRIVAL TERMINAL=== */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                <div>To</div>
                <div>{arrivalTerminal}</div>
              </div>
              {/* ====== DATE===== */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                <div>date</div>
                <div>{date}</div>
              </div>

              {/* ===== TIME== */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                <div>Time</div>
                <div>07:45AM</div>
              </div>

              {/* ====ADULTS=== */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                <div>Adult(s)</div>
                <div>{adults}</div>
              </div>

              {/* ====SEAT NUMBERS== */}
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
                  {bookedSeat.map((p, i) => (
                    <div key={i}>
                      <div>{p},</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* =====PRICE==== */}
              {data.map((p) => (
                <div key={p._id}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "1rem",
                    }}
                  >
                    <div>Price</div>
                    <div>${Intl.NumberFormat().format(p.price)}</div>
                  </div>
                  {/* ====== TOTAL AMOUNT==== */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "1rem",
                    }}
                  >
                    <div>Total Amount</div>
                    {/* <div>${handleTotal(p.price)}</div> */}
                    <div>
                      ${Intl.NumberFormat().format(totalPrice(p.price))}
                    </div>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: "2rem" }}>
                <Button
                  disabled={
                    !form.fullName ||
                    !form.email ||
                    !form.nextOfKinName ||
                    !form.nextOfKinNumber ||
                    !form.phoneNumber
                      ? true
                      : false
                  }
                  variant="contained"
                  sx={{
                    width: "100%",
                    borderRadius: "0.8rem",
                  }}
                  onClick={() => {
                    handleClick();
                    handleSubmit();
                    navigate("/bookinghistory");
                  }}
                >
                  pay
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Subscribe />
    </div>
  );
};

export default PassengerInfo;
