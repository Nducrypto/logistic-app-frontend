import { AppBar, Card, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./ReviewSeats.css";
import Error from "../Error/Error";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../States/Contexts/ContextProvider";

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
    vehicleId,
  } = useStateContext();

  const handleContinue = () => {
    setForm(initialState);
    navigate("/passenger", {
      state: {
        selectedSeats,
        departureTerminal,
        date,
        arrivalTerminal,
        adults,
        bookedSeat,
        vehicleId,
      },
    });
  };

  const handlebackground = (e) => {
    const check = selectedSeats.find((p) => p === e);

    if (check) {
      return "orange";
    } else {
      return "teal";
    }
  };
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: ".5rem",
            }}
          >
            <div>
              <div className="seats-availabilties">Booked Seat</div>
              <button
                style={{
                  backgroundColor: "grey",
                  width: "3rem",
                  height: "1rem",
                }}
              />
            </div>
            <div>
              <div className="seats-availabilties">Available Seat</div>
              <button
                style={{
                  backgroundColor: "teal",
                  width: "3rem",
                  height: "1rem",
                }}
              />
            </div>
            <div>
              <div className="seats-availabilties">Selected Seat</div>
              <button
                style={{
                  backgroundColor: "orange",
                  width: "3rem",
                  height: "1rem",
                }}
              />
            </div>
          </div>
          <div className="seatContainer">
            {/* <div style={{ top: "0rem" }}>hhhhh</div> */}
            {error && <Error setError={setError} setOpen={setOpen} />}
            <article className="article">
              <img
                style={{ height: "2.5rem" }}
                alt=""
                src="
                https://cdn.iconscout.com/icon/premium/png-512-thumb/steering-wheel-42-819447.png?f=avif&w=256://cdn.iconscout.com/icon/free/png-512/steering-wheel-1442313-1218382.png?f=avif&w=256"
              />
              <button
                style={{
                  backgroundColor: alreadyBooked(p.seatNumbers[0])
                    ? "grey"
                    : handlebackground(p.seatNumbers[0]._id),
                  color: "white",
                  width: "4rem",
                  height: "1.5rem",
                  cursor: alreadyBooked(p.seatNumbers[0])
                    ? "not-allowed"
                    : "pointer",
                }}
                onClick={() => handleSelect(p.seatNumbers[0], p)}
                disabled={alreadyBooked(p.seatNumbers[0])}
              >
                {p.seatNumbers[0].number}
              </button>
            </article>
            <article className="article-Two">
              <button
                style={{
                  backgroundColor: alreadyBooked(p.seatNumbers[1])
                    ? "grey"
                    : handlebackground(p.seatNumbers[1]._id),
                  color: "white",

                  width: "4rem",
                  height: "1.5rem",
                  cursor: alreadyBooked(p.seatNumbers[1])
                    ? "not-allowed"
                    : "pointer",
                }}
                onClick={() => handleSelect(p.seatNumbers[1], p)}
                disabled={alreadyBooked(p.seatNumbers[1])}
              >
                {p.seatNumbers[1].number}
              </button>

              <button
                style={{
                  backgroundColor: alreadyBooked(p.seatNumbers[2])
                    ? "grey"
                    : handlebackground(p.seatNumbers[2]._id),
                  color: "white",

                  width: "4rem",
                  height: "1.5rem",
                  cursor: alreadyBooked(p.seatNumbers[2])
                    ? "not-allowed"
                    : "pointer",
                }}
                onClick={() => handleSelect(p.seatNumbers[2], p)}
                disabled={alreadyBooked(p.seatNumbers[2])}
              >
                {p.seatNumbers[2].number}
              </button>
              <button
                style={{
                  backgroundColor: alreadyBooked(p.seatNumbers[3])
                    ? "grey"
                    : handlebackground(p.seatNumbers[3]._id),
                  color: "white",

                  width: "4rem",
                  height: "1.5rem",
                  cursor: alreadyBooked(p.seatNumbers[3])
                    ? "not-allowed"
                    : "pointer",
                }}
                onClick={() => handleSelect(p.seatNumbers[3], p)}
                disabled={alreadyBooked(p.seatNumbers[3])}
              >
                {p.seatNumbers[3].number}
              </button>
            </article>
            <article className="article">
              <button
                style={{
                  backgroundColor: alreadyBooked(p.seatNumbers[4])
                    ? "grey"
                    : handlebackground(p.seatNumbers[4]._id),
                  color: "white",

                  width: "4rem",
                  height: "1.5rem",
                  cursor: alreadyBooked(p.seatNumbers[4])
                    ? "not-allowed"
                    : "pointer",
                }}
                onClick={() => handleSelect(p.seatNumbers[4], p)}
                disabled={alreadyBooked(p.seatNumbers[4])}
              >
                {p.seatNumbers[4].number}
              </button>
              <button
                style={{
                  backgroundColor: alreadyBooked(p.seatNumbers[5])
                    ? "grey"
                    : handlebackground(p.seatNumbers[5]._id),
                  color: "white",

                  width: "4rem",
                  height: "1.5rem",
                  cursor: alreadyBooked(p.seatNumbers[5])
                    ? "not-allowed"
                    : "pointer",
                }}
                onClick={() => handleSelect(p.seatNumbers[5], p)}
                disabled={alreadyBooked(p.seatNumbers[5])}
              >
                {p.seatNumbers[5].number}
              </button>
              <button
                style={{
                  backgroundColor: alreadyBooked(p.seatNumbers[6])
                    ? "grey"
                    : handlebackground(p.seatNumbers[6]._id),
                  color: "white",

                  width: "4rem",
                  height: "1.5rem",
                  cursor: alreadyBooked(p.seatNumbers[6])
                    ? "not-allowed"
                    : "pointer",
                }}
                onClick={() => handleSelect(p.seatNumbers[6], p)}
                disabled={alreadyBooked(p.seatNumbers[6])}
              >
                {p.seatNumbers[6].number}
              </button>
            </article>
            <article className="article">
              <button
                style={{
                  backgroundColor: alreadyBooked(p.seatNumbers[7])
                    ? "grey"
                    : handlebackground(p.seatNumbers[7]._id),
                  color: "white",

                  width: "4rem",
                  height: "1.5rem",
                  cursor: alreadyBooked(p.seatNumbers[7])
                    ? "not-allowed"
                    : "pointer",
                }}
                onClick={() => handleSelect(p.seatNumbers[7], p)}
                disabled={alreadyBooked(p.seatNumbers[7])}
              >
                {p.seatNumbers[7].number}
              </button>
              <button
                style={{
                  backgroundColor: alreadyBooked(p.seatNumbers[8])
                    ? "grey"
                    : handlebackground(p.seatNumbers[8]._id),
                  color: "white",

                  width: "4rem",
                  height: "1.5rem",
                  cursor: alreadyBooked(p.seatNumbers[8])
                    ? "not-allowed"
                    : "pointer",
                }}
                onClick={() => handleSelect(p.seatNumbers[8], p)}
                disabled={alreadyBooked(p.seatNumbers[8])}
              >
                {p.seatNumbers[8].number}
              </button>
              <button
                style={{
                  backgroundColor: alreadyBooked(p.seatNumbers[9])
                    ? "grey"
                    : handlebackground(p.seatNumbers[9]._id),
                  color: "white",

                  width: "4rem",
                  height: "1.5rem",
                  cursor: alreadyBooked(p.seatNumbers[9])
                    ? "not-allowed"
                    : "pointer",
                }}
                onClick={() => handleSelect(p.seatNumbers[9], p)}
                disabled={alreadyBooked(p.seatNumbers[9])}
              >
                {p.seatNumbers[9].number}
              </button>
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
