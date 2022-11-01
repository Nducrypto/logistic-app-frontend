import { AppBar, Button } from "@mui/material";
import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import LogoutPrompt from "./LogoutPrompt";

import { useAuthContext } from "../../States/Contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState(false);

  const { dispatch, user } = useAuthContext();

  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AppBar sx={{ padding: "0rem 2rem 0 0", backgroundColor: "red" }}>
      <div className="Navbar">
        <span className="nav-logo">
          {!prompt && (
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              MABENCH
            </a>
          )}
        </span>
        <div className={`nav-items ${isOpen && "open"}`}>
          <>
            {user?.result && (
              <Link to="/bookinghistory" onClick={() => setIsOpen(false)}>
                BookingHisory
              </Link>
            )}

            <Link
              to="/"
              style={{
                marginRight: "3rem",
              }}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
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
                  setPrompt(true);
                }}
                variant="contained"
                sx={{
                  width: "8rem",
                  height: "2rem",
                  textTransform: "lowercase",
                  marginLeft: { md: "5rem", sm: "5rem" },
                }}
              >
                Logout
              </Button>
            )}
          </>
          {/* ====Logout Prompt Page=== */}
          {prompt && (
            <LogoutPrompt
              setIsOpen={setIsOpen}
              setPrompt={setPrompt}
              logout={logout}
            />
          )}
          {!user?.result && (
            <Button
              variant="contained"
              sx={{
                width: "8rem",
                height: "2rem",
                textTransform: "lowercase",
              }}
              onClick={() => {
                navigate("/auth");
                setIsOpen(false);
              }}
            >
              signin/signup
            </Button>
          )}
        </div>
        {/* ====NAV TOGGLE BAR=== */}
        {prompt ? null : (
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        )}
      </div>
    </AppBar>
  );
};

export default Navbar;
