import { AppBar, Button } from "@mui/material";
import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoutPrompt from "./LogoutPrompt";
import { useStateContext } from "../../States/Contexts/ContextProvider";

import { useAuthContext } from "../../States/Contexts/AuthContext";

const Navbar = () => {
  const { section2InView, previousRoute, setPreviousRoute } = useStateContext();

  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState(false);

  const { dispatch, user } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const routeName = location.pathname;
  useEffect(() => {
    if (routeName !== "/auth") {
      const newRoute = routeName;
      sessionStorage.setItem("logistic-app-route", newRoute);
      const getRoute = sessionStorage.getItem("logistic-app-route");
      setPreviousRoute(getRoute);
    }
  }, [routeName, previousRoute, setPreviousRoute]);

  return (
    <AppBar
      sx={{
        padding: "0rem 2rem 0 0",
        backgroundColor: section2InView ? "red" : "black",
      }}
    >
      <div
        className="Navbar"
        style={{
          backgroundColor: section2InView ? "red" : "black",
        }}
      >
        <span className="nav-logo">
          {!prompt && (
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              MABENCH
            </Link>
          )}
        </span>
        <div
          className={`nav-items ${isOpen && "open"}`}
          style={{ backgroundColor: section2InView ? "red" : "black" }}
        >
          <>
            {user?.result && (
              <Link
                className="bookhistory"
                to="/bookinghistory"
                onClick={() => setIsOpen(false)}
              >
                BookingHisory
              </Link>
            )}

            {/* ==== ADMIN=== */}
            {user?.result.isAdmin && (
              <Link
                className="bookhistory"
                to="/formadmin"
                onClick={() => setIsOpen(false)}
              >
                Form
              </Link>
            )}
            {user?.result && (
              <Link
                // className="bookhistory"
                to="/profile"
                onClick={() => setIsOpen(false)}
              >
                profile
              </Link>
            )}

            {/* ==== ADMIN=== */}
            {user?.result.isAdmin && (
              <Link to="/users" onClick={() => setIsOpen(false)}>
                Users
              </Link>
            )}

            {/* ==== ADMIN=== */}
            {user?.result.isAdmin && (
              <Link to="/allbookings" onClick={() => setIsOpen(false)}>
                allbookings
              </Link>
            )}

            {/* ==== ADMIN=== */}
            {user?.result.isAdmin && (
              <Link to="/locations" onClick={() => setIsOpen(false)}>
                locations
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
