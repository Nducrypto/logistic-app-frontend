import React from "react";
import { Card, Grid, Typography, CardContent, Button } from "@mui/material";
import truck from "../../assets/truck.jpg";
import { useStateContext } from "../../States/Contexts/ContextProvider";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Earnin = () => {
  const { section2Ref } = useStateContext();
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const ndu = {
    visible: { opacity: 1, scale: 1, transition: { duration: 3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref}>
      <div ref={section2Ref}>
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
            xs={11}
            sm={11}
            md={6}
            sx={{
              padding: { md: "0rem 0rem 0rem 2rem" },
            }}
          >
            <motion.div animate={controls} initial="hidden" variants={ndu}>
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
                    Earn easy with M&EM
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
            </motion.div>
          </Grid>
          <Grid item xs={11} sm={11} md={6}>
            <motion.div
              animate={controls}
              initial="hidden"
              variants={squareVariants}
            >
              <Typography
                sx={{
                  marginTop: { xs: "2rem", md: "-0.1rem", sm: "-0.1rem" },
                  height: { md: "30rem", sm: "30rem", xs: "20rem" },
                }}
              >
                <img
                  src={truck}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  alt=""
                />
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </motion.div>
  );
};

export default Earnin;
