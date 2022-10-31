// import React from "react";

// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

// import images from "./images";
// import "./Gallery.css";
// import { Typography } from "@mui/material";

// const Gallery = () => {
//   const scrollRef = React.useRef(null);

//   const scroll = (direction) => {
//     const { current } = scrollRef;

//     if (direction === "left") {
//       current.scrollLeft -= 300;
//     } else {
//       current.scrollLeft += 300;
//     }
//   };

//   return (
//     <div className="app__gallery flex__center">
//       <div className="app__gallery-content">
//         <Typography variant="h3" className="headtext__cormorant">
//           Best Trip Prices
//         </Typography>
//         <p
//           className="p__opensans"
//           style={{ color: "#AAAAAA", marginTop: "2rem" }}
//         >
//           Bringing you more routes at the best prices.
//         </p>
//       </div>
//       <div className="app__gallery-images">
//         <div className="app__gallery-images_container" ref={scrollRef}>
//           {[
//             images.gallery01,
//             images.gallery02,
//             images.gallery03,
//             images.gallery04,
//           ].map((image, index) => (
//             <div
//               className="app__gallery-images_card flex__center"
//               key={`gallery_image-${index + 1}`}
//             >
//               <img src={image} alt="gallery_image" />
//             </div>
//           ))}
//         </div>
//         <div className="app__gallery-images_arrows">
//           <KeyboardArrowLeftIcon
//             className="gallery__arrow-icon"
//             onClick={() => scroll("left")}
//           />
//           <KeyboardArrowRightIcon
//             className="gallery__arrow-icon"
//             onClick={() => scroll("right")}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
