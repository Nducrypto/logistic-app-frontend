import React from "react";
import { Grid, Typography } from "@mui/material";
import Form from "../Form/Form";
import { useStateContext } from "../../States/Contexts/ContextProvider";
import "./Hero.css";
import { motion } from "framer-motion";

const Heros = () => {
  const { mode } = useStateContext();

  return (
    <div className="hero-container">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          marginTop: { xs: "3.5rem", md: "2rem" },
          marginBottom: { xs: "3rem", md: "0.5" },
        }}
      >
        <Grid
          item
          xs={11}
          sm={6}
          sx={{
            marginTop: { xs: "3rem", md: "2rem" },
            marginBottom: { xs: "3rem", md: "0.5" },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <Typography
              // variant="h3"
              sx={{
                textAlign: "center",
                fontSize: { xs: "1.7rem", sm: "2.3rem", md: "3rem" },
                color: "white",
                fontWeight: 600,
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
              The modern way to <br />
              <span style={{ color: "orange" }}>commute across cities</span>
              <Typography
                sx={{
                  marginTop: "1rem",
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.5rem" },
                }}
              >
                MIKELLE & EBUBE MOTORS is an African technology powered company,
                providing seamless mobility services to commuters across Africa
              </Typography>
            </Typography>
          </motion.div>
        </Grid>

        {/* FORM GRID  */}
        <Grid
          item
          xs={11}
          sm={6}
          sx={{
            marginBottom: { xs: "0.5rem", md: "0.5" },
          }}
        >
          <Form />
        </Grid>
      </Grid>
    </div>
  );
};

export default Heros;
