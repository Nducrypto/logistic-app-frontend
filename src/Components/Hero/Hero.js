import React from "react";
import { Grid, Typography } from "@mui/material";
import Form from "../Form/Form";
import { useStateContext } from "../../States/Contexts/ContextProvider";

const Heros = () => {
  const { mode } = useStateContext();

  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          marginTop: { xs: "5.5rem", md: "2rem" },
          backgroundColor: "black",
        }}
      >
        <Grid
          item
          xs={11}
          sm={6}
          sx={{
            marginTop: { xs: "3rem", md: "2rem" },
            marginBottom: { xs: "4rem", md: "0.5" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: 700,
              marginTop: {
                md:
                  mode === "booking status"
                    ? "10rem"
                    : mode === "hire a bus"
                    ? "5rem"
                    : "-7rem",
              },
            }}
          >
            The modern way to <br /> commute across cities
            <Typography variant="body2" sx={{ marginTop: "1rem" }}>
              GIGM is an African technology powered company, providing seamless
              mobility services to commuters across Africa
            </Typography>
          </Typography>
        </Grid>

        {/* FORM GRID  */}
        <Grid
          item
          xs={11}
          sm={6}
          sx={{
            marginBottom: { xs: "4rem", md: "0.5" },
          }}
        >
          <Form />
        </Grid>
      </Grid>
    </div>
  );
};

export default Heros;
