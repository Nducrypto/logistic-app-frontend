import { Typography } from "@mui/material";
import React from "react";

const InputReview = ({ value, onChange, disabled, title }) => {
  return (
    <Typography>
      {title}
      <input
        type="checkbox"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </Typography>
  );
};

export default InputReview;
