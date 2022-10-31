import React, { useEffect } from "react";

// import Gallery from "../GallerySlider.js/Gallery";
import Heros from "../Hero/Hero";
import Wallet from "../Wallet/Wallet";
import Earning from "../Earning/Earning";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    JSON.parse(localStorage.getItem("profile"));
  }, [location]);

  return (
    <div>
      <Heros />
      {/* <Gallery /> */}
      <Wallet />
      <Earning />
    </div>
  );
};

export default Home;
