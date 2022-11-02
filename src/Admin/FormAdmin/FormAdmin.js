import React from "react";
import {
  Grid,
  TextField,
  Paper,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Container,
} from "@mui/material";
import { places } from "../../Objects/Constants/Categories";
import { useStateContext } from "../../States/Contexts/ContextProvider";
import { useDispatch } from "react-redux";
import {
  createBooking,
  createLocations,
} from "../../States/Action/LocationActions";

const FormAdmin = () => {
  const {
    departureTerminal,
    setDepartureTerminal,
    arrivalTerminal,
    setArrivalTerminal,
    price,
    setPrice,
    seats,
    setSeats,
  } = useStateContext();

  const dispatch = useDispatch();

  //  HANDLE SUBMIT
  const handleSubmit = () => {
    const seatNumbers = seats.split(",").map((seat) => ({ number: seat }));

    dispatch(
      createLocations({
        departureTerminal,
        arrivalTerminal,
        seatNumbers: seatNumbers,
        price,
      })
    );
  };
  console.log(handleSubmit);
  // ====FILTEREDLOCATION======
  const filteredLocation = places.filter(
    (p) => p.location !== departureTerminal
  );

  return (
    <Container style={{ marginTop: "5rem" }}>
      <Grid
        className="hey"
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: { md: "6rem" } }}
      >
        {/* FORM GRID  */}
        <Grid item xs={10} sm={6} md={4}>
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
                <h3>create destinations</h3>
              </Grid>

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
                  <textarea
                    style={{ marginTop: "2rem" }}
                    onChange={(e) => setSeats(e.target.value)}
                    value={seats}
                    label="seat"
                    type="text"
                  />
                </div>
                <div>
                  <TextField
                    style={{ marginTop: "2rem" }}
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    label="price"
                    type="number"
                  />
                </div>
                <div style={{ marginTop: "2rem" }}></div>
              </div>

              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  handleSubmit();
                }}
                sx={{
                  padding: "-2rem",
                }}
              >
                create
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FormAdmin;
