import React, { useEffect } from "react";

// import Gallery from "../GallerySlider.js/Gallery";
import Heros from "../Hero/Hero";
import Wallet from "../Wallet/Wallet";
import Earning from "../Earning/Earning";
import { useLocation } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";

// import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";

// import { Twitter, Facebook } from "@mui/icons-material";
// import { Print, Share, } from "@mui/icons-material";

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
      <Subscribe />
    </div>
  );
};

export default Home;
