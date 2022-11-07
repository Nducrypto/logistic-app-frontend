import { AppBar, Button, Card, CardContent } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./ReviewSeats.css";
import Error from "../Error/Error";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../States/Contexts/ContextProvider";
import InputReview from "./InputReview";

const ReviewSeats = ({
  p,
  handleSelect,
  alreadyBooked,
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
  } = useStateContext();

  return (
    <AppBar sx={{ color: "black" }}>
      <div className="reserve">
        <Card
          sx={{
            backgroundColor: "lightgreen",
            alignItems: "center",
            padding: {
              lg: "0rem 0rem 0rem 3rem",
              xs: "0rem 1.5rem 0rem 1.5rem",
              sm: "0rem 0rem 0rem 3rem",
            },
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            width: { lg: "40%", xs: "98%", sm: "70%", md: "60%" },
            height: { lg: "80%", xs: "60%", sm: "80%", md: "80%" },
            borderRadius: "1rem",
          }}
        >
          {error && <Error setError={setError} setOpen={setOpen} />}
          <CardContent sx={{ marginTop: "1.6rem" }}>driver</CardContent>

          <>
            <InputReview
              title={p.seatNumbers[0].number}
              value={p.seatNumbers[0]._id}
              id={p.seatNumbers[0].number}
              onChange={handleSelect}
              disabled={alreadyBooked(p.seatNumbers[0])}
            />
            <InputReview
              title={p.seatNumbers[1].number}
              value={p.seatNumbers[1]._id}
              id={p.seatNumbers[1].number}
              onChange={handleSelect}
              disabled={alreadyBooked(p.seatNumbers[1])}
            />
            <InputReview
              title={p.seatNumbers[2].number}
              value={p.seatNumbers[2]._id}
              id={p.seatNumbers[2].number}
              onChange={handleSelect}
              disabled={alreadyBooked(p.seatNumbers[2])}
            />
            <InputReview
              title={p.seatNumbers[3].number}
              value={p.seatNumbers[3]._id}
              id={p.seatNumbers[3].number}
              onChange={handleSelect}
              disabled={alreadyBooked(p.seatNumbers[3])}
            />
            <InputReview
              title={p.seatNumbers[4].number}
              value={p.seatNumbers[4]._id}
              id={p.seatNumbers[4].number}
              onChange={handleSelect}
              disabled={alreadyBooked(p.seatNumbers[4])}
            />
            <InputReview
              title={p.seatNumbers[5].number}
              value={p.seatNumbers[5]._id}
              id={p.seatNumbers[5].number}
              onChange={handleSelect}
              disabled={alreadyBooked(p.seatNumbers[5])}
            />
            <InputReview
              title={p.seatNumbers[6].number}
              value={p.seatNumbers[6]._id}
              id={p.seatNumbers[6].number}
              onChange={handleSelect}
              disabled={alreadyBooked(p.seatNumbers[6])}
            />
            <InputReview
              title={p.seatNumbers[7].number}
              value={p.seatNumbers[7]._id}
              id={p.seatNumbers[7].number}
              onChange={handleSelect}
              disabled={alreadyBooked(p.seatNumbers[7])}
            />
            <InputReview
              title={p.seatNumbers[8].number}
              value={p.seatNumbers[8]._id}
              id={p.seatNumbers[8].number}
              onChange={handleSelect}
              disabled={alreadyBooked(p.seatNumbers[8])}
            />
            <InputReview
              title={p.seatNumbers[9].number}
              value={p.seatNumbers[9]._id}
              id={p.seatNumbers[9].number}
              onChange={handleSelect}
              disabled={alreadyBooked(p.seatNumbers[9])}
            />
          </>
          <div>
            <Button
              sx={{ backgroundColor: "red", color: "white" }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon style={{ top: "0", right: "0" }} />
            </Button>
          </div>

          {error ? null : (
            <Button
              variant="contained"
              sx={{
                textTransform: "lowerCase",
                textAlign: "center",
              }}
              onClick={() => {
                setForm(initialState);
                navigate("/passenger", {
                  state: {
                    selectedSeats,
                    departureTerminal,
                    date,
                    arrivalTerminal,
                    adults,
                    bookedSeat,
                  },
                });
              }}
              className="rButton"
            >
              Reserve!
            </Button>
          )}
        </Card>
      </div>
    </AppBar>
  );
};

export default ReviewSeats;
