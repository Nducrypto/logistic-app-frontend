import { Grid, Typography } from "@mui/material";
import React from "react";
import card from "../../assets/card.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: "5rem" }}
      >
        <Grid item xs={12} md={12} sm={12} lg={3}>
          <Typography
            sx={{ marginTop: { xs: "7rem", md: "5rem", lg: "-0.4rem" } }}
          >
            <img src={card} style={{ height: "4rem", width: "4rem" }} />
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={2} sm={6}>
          <Typography
            paragraph
            sx={{
              marginTop: { xs: "-5rem", md: "-0.5rem" },
              fontWeight: "1000",
            }}
          >
            Company
          </Typography>
          <Typography paragraph sx={{ fontSize: "0.9rem" }}>
            About Us
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={2} sm={6}>
          <Typography
            paragraph
            sx={{ marginTop: { md: "6.3rem", xs: "2rem" }, fontWeight: "1000" }}
          >
            Experience
          </Typography>
          <Typography paragraph sx={{ fontSize: "0.9rem" }}>
            Contact Us
          </Typography>
          <Typography paragraph sx={{ fontSize: "0.9rem" }}>
            FAQs Us
          </Typography>
          <Typography paragraph sx={{ fontSize: "0.9rem" }}>
            Find a Terminal
          </Typography>
          <Typography paragraph sx={{ fontSize: "0.9rem" }}>
            Blogs
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={2} sm={6}>
          <Typography
            paragraph
            sx={{ marginTop: { xs: "2rem" }, fontWeight: "1000" }}
          >
            Terms
          </Typography>
          <Typography paragraph sx={{ fontSize: "0.9rem" }}>
            <a href="/" style={{ textDecoration: "none" }}>
              Privacy Policy
            </a>
          </Typography>
          <Typography paragraph>
            <a href="/" style={{ textDecoration: "none" }}>
              Terms & Conditions
            </a>
          </Typography>
          <Typography paragraph></Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={2} sm={6}>
          <Typography
            paragraph
            sx={{
              marginTop: { xs: "-3.1rem", md: "-1.5rem" },
              fontWeight: "1000",
            }}
          >
            Connect with us
          </Typography>
          <div style={{ display: "flex", flexDirection: "row", gap: "3rem" }}>
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
