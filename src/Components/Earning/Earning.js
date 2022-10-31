import React from "react";
import { Card, Grid, Typography, CardContent, Button } from "@mui/material";
import card from "../../assets/card.jpg";

const Earnin = () => {
  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "lightblue",
          marginTop: { sm: "12rem", md: "2rem" },
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            padding: { md: "0rem 0rem 0rem 2rem" },
          }}
        >
          <Card
            sx={{
              width: { sm: "100%", lg: "55%", md: "80%" },
              marginTop: { lg: "-10rem", md: "-3rem" },
              marginRight: { md: "-7rem" },
              backgroundColor: "midnightblue",
              color: "white",
              borderRadius: "1rem",
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{ fontWeight: "1000", marginTop: "2.5rem" }}
              >
                We do the <br /> heavy lifting
              </Typography>
              <Typography
                paragraph
                sx={{
                  marginTop: "2.5rem",
                  fontWeight: "700",
                  fontSize: "1.3rem",
                }}
              >
                Earn easy with GIGM
              </Typography>
              <Typography
                paragraph
                sx={{
                  marginTop: "2.5rem",
                  fontWeight: "700",
                  fontSize: "1.3rem",
                }}
              >
                Become an enterprise <br /> partner today!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginBottom: "1.5rem",
                  marginTop: "2.5rem",
                  backgroundColor: "red",
                }}
              >
                start earning
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            sx={{
              marginTop: { xs: "2rem", md: "-0.1rem", sm: "-0.1rem" },
              height: { md: "30rem", sm: "30rem" },
            }}
          >
            <img
              src={card}
              style={{
                height: "100%",
                width: "100%",
              }}
              alt=""
            />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Earnin;
