import { Image } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import checkImg from "../assets/check.png";

const Thankyou = ({setIsSubmitted}) => {
  return (
    <Stack  height={"90vh"} justifyContent={"center"} alignItems={"center"}>
    <Stack
     
      justifyContent={"center"}
      alignItems={"center"}
      gap={"0.8rem"}
    >
      <img src={checkImg} width={100}  />
      <Typography color={"#263c62"} fontSize={20} fontWeight={"bold"}>
        Thank you for providing the feedback
      </Typography>
      <Typography color={"gray"}>
        We will work towards improving your experience
      </Typography>
      <Button
        onClick={() => setIsSubmitted(false)}
        color="secondary"
        variant="contained"
      >
        Close
      </Button>
    </Stack>
  </Stack>
  );
};

export default Thankyou;
