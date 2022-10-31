import { Grid, Typography } from "@mui/material";
import React from "react";
import budget from "../../assets/budget.png";
import card from "../../assets/card.jpg";
import "./Wallet.css";

const Enjoy = () => {
  return (
    <div style={{ marginBottom: "4rem" }}>
      <Grid
        alignItems="center"
        justifyContent="center"
        container
        sx={{
          marginTop: "1rem",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            backgroundColor: "lightBlue",
            height: "25rem",
            textAlign: "center",
            color: "black",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginTop: "6rem",
              fontWeight: "700",
            }}
          >
            Enjoy the <span>GIGM Appvantage</span>
          </Typography>
          <Typography
            variant="h4"
            sx={{
              marginTop: "1rem",
              fontWeight: "700",
            }}
          >
            Move Freely, Do Easily
          </Typography>
          <Typography
            paragraph
            sx={{
              marginTop: "1rem",
              fontWeight: "700",
            }}
          >
            It is all you need in one. Book bus tickets, hire a <br />
            vehicle and pay bills.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            backgroundColor: "white",
            height: "25rem",
            padding: "2rem 2rem 2rem 2rem",
          }}
        >
          <img
            src={budget}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "2rem",
            }}
          />
        </Grid>
      </Grid>

      {/* =========SECOND PARENT GRID==== */}
      <Grid alignItems="center" justifyContent="center" container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            backgroundColor: "white",
            height: "30rem",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              marginTop: { xs: "3.5rem", md: "6rem" },
              fontWeight: "700",
              marginLeft: "1rem",
            }}
          >
            The lightest <br /> wallet you will <br /> ever own
          </Typography>

          <Typography
            paragraph
            sx={{
              marginTop: "1rem",
              fontWeight: "700",
              marginLeft: "1rem",
            }}
          >
            The GIGM digital wallet is a seamless way to pay <br /> for
            transactions within our ecosystem. Purchase <br />
            bus tickets, airtime, data and pay for utility bills <br /> using
            the wallet available only on the mobile app.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            backgroundColor: "white",
            height: { md: "30rem", sm: "30rem" },
            padding: {
              md: "2rem 2rem 8rem 2rem",
            },
            margingBottom: "-6rem",
          }}
        >
          <img alt="" src={card} className="image" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Enjoy;
