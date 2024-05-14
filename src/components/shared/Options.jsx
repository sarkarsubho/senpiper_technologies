import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import React from "react";

const formData = ({ formData, name, changeHandler }) => {
  return (
    <Stack direction={"row"} onChange={changeHandler}>
      <FormControlLabel
        control={
          <Checkbox
            value={"Excellent"}
            name={name}
            checked={formData[name] === "Excellent"}
            color="secondary"
          />
        }
        label="Excellent"
      />
      <FormControlLabel
        control={
          <Checkbox
            color="secondary"
            name={name}
            value={"Good"}
            checked={formData[name] === "Good"}
          />
        }
        label="Good"
      />
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            value={"Fair"}
            color="secondary"
            checked={formData[name] === "Fair"}
          />
        }
        label="Fair"
      />
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            color="secondary"
            value={"Bad"}
            checked={formData[name] === "Bad"}
          />
        }
        label="Bad"
      />
    </Stack>
  );
};

export default formData;
