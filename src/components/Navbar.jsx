import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <Stack
        direction={"row"}
        py={2}
        borderRadius={"10px"}
        px={10}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography as="h2" fontSize={"25px"} sx={{}} fontWeight={700}>
          Aromatic Bar
        </Typography>
        {location.pathname === "/details" ? (
          <Button
            color="success"
            sx={{ width: "220px" }}
            variant="contained"
            onClick={() => navigate("/")}
          >
            Add new
          </Button>
        ) : (
          <Button
            color="success"
            sx={{ width: "220px" }}
            variant="contained"
            onClick={() => navigate("/details")}
          >
            View All Feedbacks
          </Button>
        )}
      </Stack>
    </div>
  );
};

export default Navbar;
