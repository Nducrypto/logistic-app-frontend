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

  // const actions = [
  //   {
  //     icon: <Twitter />,
  //     name: "twitter",
  //     link: "https://twitter.com/agbozion",
  //   },
  //   {
  //     icon: <Facebook />,
  //     name: "facebook",
  //     link: "https://facebook.com/AgboNduu",
  //   },

  //   // { icon: <FileCopy />, name: "Copy" },
  //   // { icon: <Save />, name: "Save" },
  //   // { icon: <Print />, name: "Print" },
  //   // { icon: <Share />, name: "Share" },
  // ];

  return (
    <div>
      <Heros />
      {/* <Gallery /> */}
      <Wallet />
      <Earning />
      <Subscribe />
      {/* <SpeedDial
        ariaLabel="SpeedDial"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 16,
          transform: "translateZ(0px)",
          flexGrow: 1,
        }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial> */}
    </div>
  );
};

export default Home;
