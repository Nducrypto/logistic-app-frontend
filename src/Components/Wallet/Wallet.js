import { Grid, Typography } from "@mui/material";
import "./Wallet.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { sliderPics } from "./sliderPics";

const Enjoy = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  // const { section2Ref } = useStateContext();

  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView, currentSlide]);

  useEffect(() => {
    setTimeout(() => {
      setCurrentSlide(currentSlide === 5 ? 1 : (prev) => prev + 1);
    }, 4000);
  }, [currentSlide]);

  return (
    <motion.div ref={ref} style={{ marginBottom: "4rem" }}>
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
          <motion.div
            animate={controls}
            initial="hidden"
            variants={squareVariants}
          >
            <Typography
              variant="h4"
              sx={{
                marginTop: "6rem",
                fontWeight: "700",
              }}
            >
              Enjoy the <span>M&E Motors Appvantage</span>
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
          </motion.div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            backgroundColor: "white",
            padding: "1rem 1rem 0rem 1rem",
          }}
        >
          <div className="container-slider">
            {sliderPics.map((item, index) => (
              <div
                key={index}
                className={
                  currentSlide === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <img alt="" src={item.img} className="imageSlide" />
              </div>
            ))}
          </div>
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
            sx={{
              marginTop: { xs: "3.5rem", md: "6rem" },
              fontSize: { xs: "2.5rem", md: "3rem" },
              fontWeight: "500",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            The lightest wallet <br /> you will ever own
          </Typography>

          <Typography
            paragraph
            sx={{
              marginTop: "1rem",
              fontWeight: "700",
              marginLeft: "1rem",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            The M&EM digital wallet is a seamless way to <br /> pay for
            transactions within our ecosystem. <br />
            Purchase bus tickets, airtime, data and pay <br />
            for utility bills using the wallet available only
            <br /> on the mobile app.
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
          <img
            alt=""
            src="https://images.unsplash.com/photo-1614787913553-8aa43d6fc7f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxjcmVkaXQlMjBjYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className="image"
          />
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Enjoy;
