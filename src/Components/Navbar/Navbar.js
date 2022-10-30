import { AppBar, Avatar, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";

import { useAuthContext } from "../../States/Contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch, user } = useAuthContext();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AppBar sx={{ padding: "0rem 2rem 0 0", backgroundColor: "red" }}>
      <div className="Navbar">
        <span className="nav-logo">
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            MABENCH
          </a>
        </span>
        <div className={`nav-items ${isOpen && "open"}`}>
          <>
            {user?.result && (
              <a
                href="/bookinghistory"
                // style={{ fontSize: "1rem" }}
              >
                BookingHisory
              </a>
            )}

            <a href="/"></a>
            <a
              href="/"
              style={{
                marginRight: "3rem",
              }}
            >
              Contact
            </a>
            {user?.result && (
              <span
                style={{
                  color: "yellow",
                  fontSize: "1.2rem",
                  marginRight: "-3rem",
                }}
              >
                {user?.result.name}
              </span>
            )}
            {user?.result && (
              <Button
                onClick={() => {
                  setIsOpen(false);
                  logout();
                  history.push("/");
                }}
                variant="contained"
                sx={{
                  width: "8rem",
                  height: "2rem",
                  textTransform: "lowercase",
                  marginLeft: "5rem",
                }}
              >
                Logout
              </Button>
            )}
          </>
          {!user?.result && (
            <Button
              variant="contained"
              sx={{
                width: "8rem",
                height: "2rem",
                textTransform: "lowercase",
              }}
              onClick={() => {
                history.push("/auth");
                setIsOpen(false);
              }}
            >
              signin/signup
            </Button>
          )}
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </AppBar>
  );
};

export default Navbar;
