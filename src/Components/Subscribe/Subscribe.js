import React from "react";
import {
  Button,
  Card,
  Grid,
  Paper,
  Typography,
  CardContent,
  TextField,
} from "@mui/material";

const Subscribe = () => {
  return (
    <div style={{ padding: "0rem 1rem 0rem 1rem" }}>
      <Paper>
        <Grid
          alignItems="center"
          justifyContent="center"
          container
          sx={{ marginTop: "3rem" }}
        >
          <Grid item md={6} xs={11} sm={6} lg={6}>
            <Typography
              sx={{
                marginTop: { md: "1rem", xs: "1rem" },
                fontWeight: "400",
                fontSize: "30px",
              }}
            >
              Be the first to receive the <br /> latest news and product
              <br />
              updates.
            </Typography>
          </Grid>

          <Grid item md={6} xs={11} sm={6} lg={6}>
            <TextField
              sx={{
                width: { xs: "14.6rem", md: "19rem", sm: "16rem", lg: "30rem" },
              }}
              color="primary"
              label="email"
            />
            <Button
              sx={{
                textTransform: "lowercase",
                marginTop: "0.5rem",
                backgroundColor: "red",
                color: "white",
              }}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Subscribe;
