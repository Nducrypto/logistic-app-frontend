import { Typography } from "@mui/material";
import React from "react";

const InputReview = ({ value, onChange, disabled, title }) => {
  return (
    <Typography>
      {title}
      <input
        style={{ width: "3rem", height: "2rem" }}
        type="checkbox"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </Typography>
  );
};

export default InputReview;
