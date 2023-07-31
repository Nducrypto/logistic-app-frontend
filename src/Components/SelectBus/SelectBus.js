import {
  Button,
  Card,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { useLocation } from "react-router-dom";

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
    setBookedSeat,
    setVehicleId,
  } = useStateContext();

  const location = useLocation();
  const departureTerminal = location.state.departureTerminal;
  const arrivalTerminal = location.state.arrivalTerminal;
  const adults = location.state.adults;
  const date = location.state.date;
  const { data, loading } = useFetch(
    `/page?departureTerminal=${departureTerminal}&arrivalTerminal=${arrivalTerminal}`
  );

  const availableSeats = () => {
    // Extract all unavailable dates for each seat and flatten the array
    const allUnavailableDates = data.flatMap((item) =>
      item.seatNumbers.flatMap(({ unavailableDates }) =>
        unavailableDates.filter((isAvailable) => isAvailable.includes(date))
      )
    );
    // Extract all seat numbers from the data
    const allSeatNumbers = data.flatMap(({ seatNumbers }) =>
      seatNumbers.flatMap(({ number }) => number)
    );
    // Calculate the number of available seats by subtracting unavailable seats from total seats
    const availableSeatCount =
      allSeatNumbers.length - allUnavailableDates.length;
    return availableSeatCount;
  };

  const alreadyBooked = (t) => {
    const isBooked = t.unavailableDates.some((p) => p.includes(date));

    return isBooked;
  };

  // select desired seat
  const handleSeatSelection = (item, locationId) => {
    const { _id: locationIdValue } = locationId;
    const { _id: itemId, number } = item;

    setVehicleId(locationIdValue);
    updateSeatIds(itemId);
    updateSeatNumber(number);
  };

  const updateSeatIds = (itemId) => {
    setSelectedSeats((prevSelectedSeats) => {
      const checkId = prevSelectedSeats.indexOf(itemId);
      const updatedArray = [...prevSelectedSeats];
      checkId !== -1
        ? updatedArray.splice(checkId, 1)
        : updatedArray.push(itemId);
      return updatedArray;
    });
  };

  const updateSeatNumber = (seatNumber) => {
    setBookedSeat((prevBookedSeats) => {
      const checkNumber = prevBookedSeats.some((p) => p.seatId === seatNumber);
      return checkNumber
        ? prevBookedSeats.filter((p) => p.seatId !== seatNumber)
        : [...prevBookedSeats, seatNumber];
    });
  };

  if (selectedSeats.length > Number(adults)) {
    setError(true);
    setSelectedSeats([]);
    setBookedSeat([]);
  }

  return (
    <>
      <div
        style={{
          marginTop: "7rem",
        }}
      >
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
                    alt=""
                    loading="lazy"
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
                      Available Seats : {availableSeats()}
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
                      &#8358; {Intl.NumberFormat().format(p.price)}
                    </Typography>
                    <Button
                      variant="contained"
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
                    handleSeatSelection={handleSeatSelection}
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
