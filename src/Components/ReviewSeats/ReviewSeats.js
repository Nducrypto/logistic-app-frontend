import { AppBar, Card, IconButton } from "@mui/material";
import React, { useCallback, useEffect, useMemo } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./ReviewSeats.css";
import Error from "../Error/Error";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../States/Contexts/ContextProvider";

const ReviewSeats = ({
  bus,
  departureTerminal,
  date,
  arrivalTerminal,
  adults,
}) => {
  const navigate = useNavigate();
  const {
    bookedSeat,
    initialState,
    setForm,
    setOpen,
    error,
    setError,
    selectedSeats,
    vehicleId,
    setVehicleId,
    setBookedSeat,
    setSelectedSeats,
  } = useStateContext();

  function handleContinue() {
    setForm(initialState);
    const data = {
      selectedSeats,
      departureTerminal,
      date,
      arrivalTerminal,
      adults,
      bookedSeat,
      vehicleId,
      price: Number(bus.price),
    };
    sessionStorage.setItem("booking-info", JSON.stringify(data));
    navigate("/passenger");
  }

  function handleSeatSelection(seat) {
    const { _id: busId } = bus;
    const { _id: seatId, number } = seat;

    setVehicleId(busId);
    updateSeatIds(seatId);
    updateSeatNumber(number);
  }

  function updateSeatIds(itemId) {
    setSelectedSeats((previous) => {
      const checkId = previous.indexOf(itemId);
      const updatedArray = [...previous];
      checkId !== -1
        ? updatedArray.splice(checkId, 1)
        : updatedArray.push(itemId);
      return updatedArray;
    });
  }

  function updateSeatNumber(seatNumber) {
    setBookedSeat((previous) => {
      const checkNumber = previous.indexOf(seatNumber);

      return checkNumber !== -1
        ? previous.filter((number) => parseInt(number) !== parseInt(seatNumber))
        : [...previous, seatNumber];
    });
  }

  const isSeatsGreaterThanAdults = useCallback(() => {
    if (selectedSeats.length > Number(adults)) {
      setError(true);
      setSelectedSeats([]);
      setBookedSeat([]);
    }
  }, [setError, selectedSeats, adults, setSelectedSeats, setBookedSeat]);

  useEffect(() => {
    isSeatsGreaterThanAdults();
  }, [isSeatsGreaterThanAdults]);

  const isSeatBookedOnDate = useMemo(() => {
    function checkAlreadyBooked(seats) {
      const dateTimestamp = new Date(date).getTime();
      const unavailableDatesSet = new Set(
        seats.unavailableDates.map((unavailableDate) =>
          new Date(unavailableDate).getTime()
        )
      );
      return unavailableDatesSet.has(dateTimestamp);
    }

    return checkAlreadyBooked;
  }, [date]);

  const getButtonStyle = (seat, isSeatBooked) => ({
    backgroundColor: isSeatBooked ? "grey" : colorForSelectedSeat(seat._id),
    cursor: isSeatBooked ? "not-allowed" : "pointer",
  });

  function colorForSelectedSeat(seatId) {
    const check = selectedSeats.includes(seatId);
    if (check) {
      return "orange";
    } else {
      return "teal";
    }
  }

  return (
    <AppBar sx={{ color: "black" }}>
      <div className="reserve">
        <Card
          sx={{
            backgroundColor: "wheat",
            alignItems: "center",
            width: { lg: "40%", xs: "90%", sm: "55%", md: "80%" },
            height: { lg: "70%", xs: "60%", sm: "40%", md: "70%" },
            borderRadius: "1rem",
          }}
        >
          <IconButton
            sx={{
              float: "right",
              marginTop: ".5rem",
              color: "red",
            }}
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
          <div className="availabilty-container">
            <div>
              <div className="seats-availabilties">Booked</div>
              <div className="booked-seat"></div>
            </div>
            <div>
              <div className="seats-availabilties">Available</div>
              <div className="available-seat"></div>
            </div>
            <div>
              <div className="seats-availabilties">Selected</div>

              <div className="selected-seat"></div>
            </div>
          </div>
          <div className="seatContainer">
            {error && <Error />}
            <article className="article">
              <img
                className="steering-image"
                loading="lazy"
                alt=""
                src="
                https://cdn.iconscout.com/icon/premium/png-512-thumb/steering-wheel-42-819447.png?f=avif&w=256://cdn.iconscout.com/icon/free/png-512/steering-wheel-1442313-1218382.png?f=avif&w=256"
              />
            </article>
            <article>
              {bus.seatNumbers.map((seat, index) => {
                const isSeatBooked = isSeatBookedOnDate(seat);

                return (
                  <div key={seat._id}>
                    <button
                      style={getButtonStyle(seat, isSeatBooked)}
                      onClick={() => {
                        handleSeatSelection(seat);
                      }}
                      disabled={isSeatBooked}
                      className={`seat${index + 1}`}
                    >
                      {seat.number}
                    </button>
                  </div>
                );
              })}
            </article>

            <div className="bookContainer">
              <button
                style={{
                  backgroundColor:
                    selectedSeats.length < adults ? "pink" : error && "pink",
                  cursor: selectedSeats.length < adults && "not-allowed",
                }}
                disabled={selectedSeats.length < adults}
                onClick={handleContinue}
                className="rButton"
              >
                Continue
              </button>
            </div>
          </div>
        </Card>
      </div>
    </AppBar>
  );
};

export default ReviewSeats;
