import { AppBar, Button, Card, CardContent, Typography } from "@mui/material";
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
  const { initialState, setForm, setOpen, error, setError, selectedSeats } =
    useStateContext();

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
            {p.seatNumbers.map((t) => (
              <div key={t._id}>
                <Typography sx={{ marginTop: "1rem" }}>
                  {t.number}
                  <input
                    type="checkbox"
                    value={t.number}
                    onChange={handleSelect}
                    disabled={alreadyBooked(t)}
                    style={{
                      width: "3rem",
                      height: "2rem",
                    }}
                  />
                </Typography>
              </div>
            ))}
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
              onClick={(t) => {
                setForm(initialState);
                navigate("/passenger", {
                  selectedSeats,
                  departureTerminal,
                  date,
                  arrivalTerminal,
                  adults,
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
