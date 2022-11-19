import {
  Button,
  Card,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  CircularProgress,
  Paper,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import React from "react";
import { useStateContext } from "../../States/Contexts/ContextProvider.js";
import useFetch from "../../Hooks/useFetch.js";
import moment from "moment";
import gigbus from "../../assets/gigbus.jpg";
import ReviewSeats from "../ReviewSeats/ReviewSeats";
import Subscribe from "../Subscribe/Subscribe.js";

const SelectBus = () => {
  const {
    open,
    setOpen,
    setError,
    selectedSeats,
    setSelectedSeats,
    bookedSeat,
    setBookedSeat,
  } = useStateContext();

  const location = useLocation();
  const departureTerminal = location.state.departureTerminal;
  const arrivalTerminal = location.state.arrivalTerminal;
  const adults = location.state.adults;
  const date = location.state.date;
  const { data, loading } = useFetch(
    `/page?departureTerminal=${departureTerminal}&arrivalTerminal=${arrivalTerminal}`
  );

  const alreadyBooked = (t) => {
    const isFound = t.unavailableDates.some((p) => p.includes(date));

    return isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    const id = e.target.id;

    setSelectedSeats(
      checked
        ? [...selectedSeats, value]
        : selectedSeats.filter((item) => item !== value)
    );

    setBookedSeat(
      checked ? [...bookedSeat, id] : bookedSeat.filter((p) => p !== id)
    );

    if (selectedSeats.length >= Number(adults)) {
      setError(true);
      setSelectedSeats([]);
      setBookedSeat([]);
    } else {
      return selectedSeats;
    }
  };
  console.log(selectedSeats);
  console.log(bookedSeat);

  return (
    <>
      <div
        style={{
          marginTop: "7rem",
        }}
      >
        {/* ========= CUSTOMER DETAILS GRID CONTAINER==== */}
        <Paper>
          <Grid container alignItems="center" justifyContent="center">
            {/* =======EMAIL===== */}
          </Grid>
        </Paper>

        {/* ===========BOOKING DETAILS GRID CONTAINER =========== */}
        <Grid alignItems="center" justifyContent="center" container>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontWeight: "500",
              marginTop: "3rem",
              marginRight: { md: "8rem", sm: "5rem", lg: "5rem" },
            }}
          >
            {departureTerminal} {arrivalTerminal}
          </Typography>
          {!data.length && !loading ? (
            <div style={{ marginTop: "3rem" }}>
              <Typography variant="h4">NO BUS AVAILABLE</Typography>
            </div>
          ) : loading ? (
            <CircularProgress />
          ) : (
            data.map((p) => (
              <Card
                key={p._id}
                sx={{
                  width: { xs: "85%", md: "95%" },
                  display: { md: "flex" },
                  flexDirection: { md: "row" },
                }}
              >
                <Grid item md={6}>
                  <CardMedia
                    component="img"
                    height="194"
                    src={gigbus}
                    alt="Ndubuisi"
                    sx={{
                      height: { md: "100%" },
                    }}
                  />
                </Grid>
                <Grid item md={6}>
                  <CardContent>
                    <Typography
                      variant="h4"
                      sx={{ marginTop: { md: 0.5, xs: 0.5 } }}
                    >
                      JET (Jet Mover)
                    </Typography>
                    <Typography
                      paragraph
                      color="text.secondary"
                      sx={{ marginTop: { md: 0.5, xs: 0.5 } }}
                    >
                      departure: {p.departureTerminal} . Arrival:
                      {p.arrivalTerminal}
                    </Typography>
                    <Typography paragraph>
                      {moment(date).format("MMMM Do YYYY")}
                    </Typography>
                    <Typography paragraph>
                      {moment(date).format("dddd")} : 07:45am
                    </Typography>
                    <Typography paragraph>Adult(s) : {adults}</Typography>
                  </CardContent>
                </Grid>

                <Grid item md={6}>
                  <CardContent>
                    <Typography
                      variant="h4"
                      sx={{
                        marginTop: { md: "5rem" },
                        marginLeft: { md: "12rem", xs: "5rem" },
                      }}
                    >
                      ${Intl.NumberFormat().format(p.price)}
                    </Typography>
                    <Button
                      sx={{
                        marginTop: { md: "1rem" },
                        marginLeft: { md: "10rem" },
                        width: { xs: "100%", md: "50%" },
                        backgroundColor: "red",
                        color: "white",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      view seats
                    </Button>
                  </CardContent>
                </Grid>
                {open ? (
                  <ReviewSeats
                    p={p}
                    handleSelect={handleSelect}
                    alreadyBooked={alreadyBooked}
                    departureTerminal={departureTerminal}
                    arrivalTerminal={arrivalTerminal}
                    date={date}
                    adults={adults}
                  />
                ) : null}
              </Card>
            ))
          )}
        </Grid>
      </div>
      <Subscribe />
    </>
  );
};

export default SelectBus;
