import React from "react";
import {
  Grid,
  TextField,
  Paper,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { places, number } from "../../Objects/Constants/Categories";
import { useStateContext } from "../../States/Contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import FormatDate from "../../Utils/FormatDate";
// import { useDispatch } from "react-redux";
import { useAuthContext } from "../../States/Contexts/AuthContext";
// import { createBooking } from "../../States/Action/BookingActions";

const Form = () => {
  const {
    mode,
    setMode,
    date,
    setDate,
    departureTerminal,
    setDepartureTerminal,
    arrivalTerminal,
    setArrivalTerminal,

    adults,
    setAdults,
    // price,
    // setPrice,
    // seats,
    // setSeats,
  } = useStateContext();
  const { user } = useAuthContext();
  // const dispatch = useDispatch();

  const navigate = useNavigate();

  //  HANDLE SUBMIT
  const handleSubmit = () => {
    navigate(`/select-bus`, {
      state: {
        departureTerminal,
        arrivalTerminal,
        adults,
        date,
      },
    });
  };

  // ====FILTEREDLOCATION======
  const filteredLocation = places.filter(
    (p) => p.location !== departureTerminal
  );

  return (
    <div>
      <Grid
        className="hey"
        container
        // spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: { md: "6rem" } }}
      >
        {/* FORM GRID  */}
        <Grid item xs={12} sm={9}>
          <Paper
            elevation={6}
            sx={{
              borderRadius: 8,
            }}
          >
            <form style={{ padding: "1rem" }}>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={4} sm={4}>
                  <Button
                    sx={{
                      borderBottom:
                        mode === "" || mode === "book a sit"
                          ? "2px solid yellow"
                          : null,
                      fontSize: "0.7rem",
                    }}
                    name="title"
                    size="small"
                    onClick={() => {
                      setMode("book a sit");
                    }}
                  >
                    book a sit
                  </Button>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Button
                    sx={{
                      fontSize: "0.7rem",
                      borderBottom:
                        mode === "hire a bus" ? "2px solid green" : "",
                    }}
                    name="title"
                    size="small"
                    onClick={() => setMode("hire a bus")}
                  >
                    hire a bus
                  </Button>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Button
                    sx={{
                      fontSize: "0.7rem",
                      borderBottom:
                        mode === "booking status" ? "2px solid red" : "",
                    }}
                    size="small"
                    onClick={() => setMode("booking status")}
                  >
                    Booking status
                  </Button>
                </Grid>
              </Grid>

              <Divider />
              {/* SECOND GRID FOR ONE WAY BUTTON  */}
              <Grid container spacing={2}>
                <Grid item xs={4} sm={4} sx={{ marginTop: "1rem" }}>
                  <Button
                    fullWidth
                    sx={{ backgroundColor: "white", fontSize: "0.9rem" }}
                    variant="outlined"
                    onClick={() => setMode("one way")}
                  >
                    One Way
                  </Button>
                </Grid>
                <Grid item xs={4} sm={4} sx={{ marginTop: "1rem" }}>
                  <Button
                    sx={{
                      fontSize: "0.8rem",

                      border: mode === "round trip" ? "2px solid red" : "",
                    }}
                    onClick={() => setMode("round trip")}
                  >
                    Round Trip
                  </Button>
                </Grid>
              </Grid>

              {/* BOOK A SIT INPUT */}
              {mode === "" || mode === "book a sit" || mode === "one way" ? (
                <div>
                  <div style={{ marginTop: "3rem" }}>
                    <InputLabel>Travelling From</InputLabel>
                    <Select
                      fullWidth
                      onChange={(e) => setDepartureTerminal(e.target.value)}
                      value={departureTerminal}
                    >
                      {places.map((p) => (
                        <MenuItem key={p.location} value={p.location}>
                          {p.location}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>

                  <div style={{ marginTop: "2rem" }}>
                    <InputLabel>Travelling To</InputLabel>

                    <Select
                      fullWidth
                      onChange={(e) => setArrivalTerminal(e.target.value)}
                      value={arrivalTerminal}
                    >
                      {!departureTerminal ? (
                        <div>select depature terminal</div>
                      ) : (
                        filteredLocation.map((f) => (
                          <MenuItem key={f.location} value={f.location}>
                            {f.location}
                          </MenuItem>
                        ))
                      )}
                    </Select>
                  </div>

                  <div>
                    <TextField
                      style={{ marginTop: "2rem" }}
                      onChange={(e) => setDate(FormatDate(e.target.value))}
                      value={date}
                      type="date"
                      // type="datetime-local"
                      // inputProps={{
                      //   min: new Date().toISOString().slice(0, 16),
                      // }}
                    />
                  </div>

                  <div style={{ marginTop: "2rem" }}>
                    <InputLabel>Adults</InputLabel>
                    <Select
                      fullWidth
                      onChange={(e) => setAdults(e.target.value)}
                      value={adults}
                      type="number"
                    >
                      {number.map((p) => (
                        <MenuItem key={p.adult} value={p.adult}>
                          {p.adult}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </div>
              ) : null}

              {/* HIRE A BUS INPUT  */}
              {mode === "hire a bus" && (
                <>
                  <div>
                    <FormControl></FormControl>
                    <InputLabel>Enter Depature Point</InputLabel>
                    <Select
                      style={{ marginTop: "2rem" }}
                      fullWidth
                      label="Hire From"
                    />
                  </div>

                  <div>
                    <FormControl></FormControl>
                    <InputLabel>Enter Hire Destination</InputLabel>
                    <Select
                      style={{ marginTop: "2rem" }}
                      fullWidth
                      label="Hire Destination"
                    />
                  </div>

                  <div>
                    <TextField type="Date" inputLabel="Departing on" />
                  </div>
                </>
              )}
              {mode === "booking status" && (
                <div style={{ marginTop: "1rem" }}>
                  <TextField fullWidth label="Check booking status" />
                </div>
              )}

              {mode === "round trip" && (
                <div>
                  <div style={{ marginTop: "3rem" }}>
                    <InputLabel>Travelling From</InputLabel>
                    <Select
                      fullWidth
                      onChange={(e) => setDepartureTerminal(e.target.value)}
                      value={departureTerminal}
                    >
                      {places.map((p) => (
                        <MenuItem key={p.location} value={p.location}>
                          {p.location}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>

                  <div style={{ marginTop: "2rem" }}>
                    <InputLabel>Travelling To</InputLabel>

                    <Select
                      fullWidth
                      onChange={(e) => setArrivalTerminal(e.target.value)}
                      value={arrivalTerminal}
                    >
                      {!departureTerminal ? (
                        <div>select depature terminal</div>
                      ) : (
                        filteredLocation.map((f) => (
                          <MenuItem key={f.location} value={f.location}>
                            {f.location}
                          </MenuItem>
                        ))
                      )}
                    </Select>
                  </div>

                  <div>
                    <TextField
                      style={{ marginTop: "2rem" }}
                      name="dateOfDeparture"
                      onChange={(e) => setDate(e.target.value)}
                      value={date}
                      label="Depature Date"
                      type="date"
                    />
                  </div>
                  <div></div>
                  <div style={{ marginTop: "2rem" }}>
                    <InputLabel>Adults</InputLabel>
                    <Select
                      fullWidth
                      onChange={(e) => setAdults(e.target.value)}
                      value={adults}
                      type="Number"
                    >
                      {number.map((p) => (
                        <MenuItem key={p.adult} value={p.adult}>
                          {p.adult}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </div>
              )}

              {/* PROCEED    BUTTON */}
              {user?.result ? (
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    handleSubmit();
                  }}
                  disabled={
                    !departureTerminal || !arrivalTerminal || !adults || !date
                      ? true
                      : false
                  }
                  sx={{
                    textTransform: "lowercase",
                    marginTop: ".5rem",
                    padding: "-2rem",
                  }}
                >
                  Proceed
                </Button>
              ) : (
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    textTransform: "lowercase",
                    marginTop: ".7rem",
                    padding: "-2rem",
                  }}
                  onClick={() => navigate("/auth")}
                >
                  please sign in
                </Button>
              )}
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;
