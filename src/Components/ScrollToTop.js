import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default ScrollRestoration = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top on each page navigation
    window.scrollTo(0, 0);

    // Store scroll position in session storage when navigating away
    const scrollPositions =
      JSON.parse(sessionStorage.getItem("scrollPositions")) || {};
    scrollPositions[location.pathname] = window.scrollY;
    sessionStorage.setItem("scrollPositions", JSON.stringify(scrollPositions));

    // Enable scroll restoration when navigating back
    navigate.scrollRestoration = "manual";

    return () => {
      // Disable scroll restoration when component is unmounted
      navigate.scrollRestoration = "auto";
    };
  }, [location, navigate]);

  return null;
};
