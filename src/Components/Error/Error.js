import { Card, Typography, CardContent, Button } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import "./Error.css";
import { useStateContext } from "../../States/Contexts/ContextProvider";
const Error = () => {
  const { setOpen, setError } = useStateContext();
  return (
    <div className="errorcard">
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { lg: "33%", xs: "98%", sm: "60%", md: "45%" },
          height: { lg: "33%", xs: "30%", sm: "30%", md: "30%" },
          borderRadius: "1rem",
          marginTop: { lg: "-15rem", xs: "-24rem", sm: "-17rem", md: "=25rem" },
        }}
      >
        <div>
          <Button
            sx={{ float: "right" }}
            onClick={() => {
              setError(false);
              setOpen(false);
            }}
          >
            <CloseIcon />
          </Button>
        </div>
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              marginTop: "-2.1rem",
              textAlign: "center",
            }}
          >
            Select Seat(s) Exceeded
          </Typography>

          <Typography
            sx={{
              marginTop: "4rem",
              textAlign: "center",
            }}
          >
            You have exceeded the number of
            <br /> seats selectable
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Error;
