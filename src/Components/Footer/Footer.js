import { Grid, Typography } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div style={{ padding: "0 0 3rem 3rem", marginTop: "3rem" }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={12} sm={12} lg={3}>
          <Typography
            sx={{
              fontWeight: "700",
              marginTop: { xs: "7rem", md: "5rem", lg: "-0.4rem" },
            }}
          >
            MIKELLE & EBUBE MOTORS
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={2} sm={6}>
          <Typography
            sx={{
              marginTop: { xs: "-1.3rem", md: "-0.5rem" },
              fontWeight: "1000",
            }}
          >
            Company
          </Typography>
          <Typography sx={{ fontSize: "0.9rem" }}>About Us</Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={2} sm={6}>
          <Typography
            sx={{ marginTop: { md: "3rem", xs: "2rem" }, fontWeight: "1000" }}
          >
            Experience
          </Typography>
          <Typography sx={{ fontSize: "0.9rem" }}>Contact Us</Typography>
          <Typography sx={{ fontSize: "0.9rem" }}>FAQs Us</Typography>
          <Typography sx={{ fontSize: "0.9rem" }}>Find a Terminal</Typography>
          <Typography sx={{ fontSize: "0.9rem" }}>Blogs</Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={2} sm={6}>
          <Typography
            sx={{
              marginTop: { md: "-0.2rem", xs: "2rem" },
              fontWeight: "1000",
            }}
          >
            Terms
          </Typography>
          <Typography sx={{ fontSize: "0.9rem" }}>
            <a href="/" style={{ textDecoration: "none" }}>
              Privacy Policy
            </a>
          </Typography>
          <Typography>
            <a href="/" style={{ textDecoration: "none" }}>
              Terms & Conditions
            </a>
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          lg={2}
          sm={6}
          sx={{
            marginTop: { xs: "-0.5rem", lg: "2rem", md: "2rem", sm: "1rem" },
          }}
        >
          <Typography
            sx={{
              marginTop: { xs: "1rem", md: "-3.3rem", sm: "-3.5" },
              fontWeight: "1000",
            }}
          >
            Connect with us
          </Typography>
          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              flexDirection: "row",
              gap: "1.4rem",
            }}
          >
            <a
              href="https://twitter.com/agbozion"
              target="_blank"
              rel="noreferrer"
            >
              {<TwitterIcon />}
            </a>
            <a
              href="https://facebook.com/AgboNduu"
              target="_blank"
              rel="noreferrer"
            >
              {<FacebookIcon />}
            </a>
            <a
              href="https://instagram.com/AgboNduu"
              target="_blank"
              rel="noreferrer"
            >
              {<InstagramIcon />}
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
