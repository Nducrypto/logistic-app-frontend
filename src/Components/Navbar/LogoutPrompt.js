import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";
const LogoutPrompt = ({ setPrompt, logout, setIsOpen }) => {
  const navigate = useNavigate();

  return (
    // <AppBar>
    <div className="container">
      <Paper
        sx={{
          width: { lg: "30%", xs: "60%", sm: "50%", md: "30%" },
          height: { lg: "30%", xs: "20%", sm: "30%", md: "30%" },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1.5rem",
            marginTop: { md: "2rem", lg: "2rem", sm: "2rem", xs: "0.5rem" },
          }}
        >
          Are you sure ?
        </Typography>
        <Typography
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "space-around",
            marginTop: { md: "2rem", lg: "2rem", sm: "2rem", xs: "1.5rem" },
          }}
        >
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              logout();
              setPrompt(false);
              setIsOpen(false);
              navigate("/auth");
            }}
          >
            logout
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setPrompt(false);
              setIsOpen(false);
            }}
          >
            Cancel
          </Button>
        </Typography>
      </Paper>
    </div>
  );
};

export default LogoutPrompt;
