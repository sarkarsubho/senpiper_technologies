import React, { useState } from "react";
import MobileNumberInput from "../components/specific/MobileNumberInput";
import {
  Box,
  Button,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Options from "../components/shared/Options";
import { ErrorOutlineOutlined } from "@mui/icons-material";
import { setLocalStorage } from "../utils/localstorage";
import Thankyou from "./Thankyou";
// import MaterialUIForm from "./Temp";

const Home = () => {
  const [numberState, setNumberState] = useState({
    number: "",
    country: "",
    error: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceQuality: "",
    beverageQuality: "",
    cleanliness: "",
    diningQuality: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    serviceQuality: false,
    beverageQuality: false,
    cleanliness: false,
    diningQuality: false,
  });

  const validateEmail = (email) => {
    // Basic email validation regex
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errorsFound = false;
    const newErrors = { ...errors };

    // Check for empty fields
    Object.keys(formData).forEach((key) => {
      if (formData[key] === "") {
        newErrors[key] = true;
        errorsFound = true;
      }
    });

    if (!validateEmail(formData.email)) {
      newErrors["email"] = true;
      errorsFound = true;
    }

    if (errorsFound) {
      setErrors(newErrors);
    } else {
      setFormData({
        name: "",
        email: "",
        serviceQuality: "",
        beverageQuality: "",
        cleanliness: "",
        diningQuality: "",
      });
      setNumberState({
        number: null,
        country: "",
        error: false,
      });
      let newReview = {
        ...formData,
        id: Date.now(),
        phone: numberState,
      };

      setLocalStorage(newReview);
      setIsSubmitted(true);
    }
  };

  return isSubmitted ? (
    <Thankyou setIsSubmitted={setIsSubmitted} />
  ) : (
    <div
      style={{
        background: "lightgray",
        height: "100vh",
        padding: "1rem",
      }}
    >
      <form
        style={{
          background: "white",
          padding: "1rem",
          borderRadius: "10px",
          maxWidth: "80rem",
          margin: "auto",
        }}
        onSubmit={handleSubmit}
      >
        <Stack
          width={"100%"}
          direction={"row"}
          justifyContent={"space-between"}
          sx={{
            flexDirection: { md: "row", xs: "column" },
          }}
          // spacing={{ md: "1rem", xs: "0" }}
          gap={"2rem"}
          mb={"2rem"}
        >
          <Box width={"100%"} position={"relative"}>
            <Typography fontWeight={"600"}>
              Customer Name{" "}
              <Typography as={"span"} color={"error"} fontWeight={"900"}>
                *
              </Typography>
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              id="name"
              name="name"
              // sx={{
              //   maxWidth: "50%",
              // }}
              autoComplete="email"
              autoFocus
              value={formData.name}
              onChange={handleInputChange}
            />
            {/* Error message modal */}
            {errors.name && (
              <Stack
                direction={"row"}
                position={"absolute"}
                bottom={"-30px"}
                right={"0"}
                bgcolor={"#FFECED"}
                mt={".5rem"}
                p={"5px"}
                border={"2px solid #FEBFC2"}
                borderRadius={"8px"}
                color={"red"}
                spacing={".5rem"}
                width={"100%"}
              >
                <ErrorOutlineOutlined />{" "}
                <Typography color={"error"} textAlign={"center"}>
                  please Enter your number.
                </Typography>
              </Stack>
            )}
          </Box>

          <Box width={"100%"} position={"relative"}>
            <Typography fontWeight={"600"}>
              Email{" "}
              <Typography as={"span"} color={"error"} fontWeight={"900"}>
                *
              </Typography>
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                maxWidth: "100%",
              }}
              value={formData.email}
              onChange={handleInputChange}
            />
            {/* Error message modal */}
            {errors.email && (
              <Stack
                direction={"row"}
                position={"absolute"}
                bottom={"-30px"}
                right={"0"}
                bgcolor={"#FFECED"}
                mt={".5rem"}
                p={"5px"}
                border={"2px solid #FEBFC2"}
                borderRadius={"8px"}
                color={"red"}
                spacing={".5rem"}
                width={"100%"}
              >
                <ErrorOutlineOutlined />{" "}
                <Typography color={"error"} textAlign={"center"}>
                  please Enter a valid email ID.
                </Typography>
              </Stack>
            )}
          </Box>
        </Stack>

        <Box>
          <Typography fontWeight={"600"}>
            Phone{" "}
            <Typography as={"span"} color={"error"} fontWeight={"900"}>
              *
            </Typography>
          </Typography>
          <MobileNumberInput
            numberState={numberState}
            setNumberState={setNumberState}
            error={errors.phone}
          ></MobileNumberInput>
        </Box>

        <Stack
          width={"100%"}
          mt={"2rem"}
          direction={"row"}
          sx={{
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Box
            position={"relative"}
            flexGrow={1}
            maxWidth={{ md: "50%", xs: "100%" }}
          >
            <Typography fontWeight={"600"}>
              Please Rate the quality of the service you received from the host.{" "}
              <Typography as={"span"} color={"error"} fontWeight={"900"}>
                *
              </Typography>
            </Typography>
            <Options
              formData={formData}
              name={"serviceQuality"}
              changeHandler={handleInputChange}
            />

            {/* Error message modal */}
            {errors.serviceQuality && (
              <Stack
                direction={"row"}
                position={"absolute"}
                bottom={"-30px"}
                right={"0"}
                bgcolor={"#FFECED"}
                mt={".5rem"}
                p={"5px"}
                border={"2px solid #FEBFC2"}
                borderRadius={"8px"}
                color={"red"}
                spacing={".5rem"}
                width={"100%"}
              >
                <ErrorOutlineOutlined />{" "}
                <Typography color={"error"} textAlign={"center"}>
                  please select any option.
                </Typography>
              </Stack>
            )}
          </Box>

          <Box position={"relative"} flexGrow={1}>
            <Typography fontWeight={"600"}>
              Please rate the quality of yours beverage.{" "}
              <Typography as={"span"} color={"error"} fontWeight={"900"}>
                *
              </Typography>
            </Typography>

            <Options
              formData={formData}
              name={"beverageQuality"}
              changeHandler={handleInputChange}
            />
            {/* Error message modal */}
            {errors.beverageQuality && (
              <Stack
                direction={"row"}
                position={"absolute"}
                bottom={"-30px"}
                right={"0"}
                bgcolor={"#FFECED"}
                mt={".5rem"}
                p={"5px"}
                border={"2px solid #FEBFC2"}
                borderRadius={"8px"}
                color={"red"}
                spacing={".5rem"}
                width={"100%"}
              >
                <ErrorOutlineOutlined />{" "}
                <Typography color={"error"} textAlign={"center"}>
                  please select any option.
                </Typography>
              </Stack>
            )}
          </Box>
        </Stack>

        <Stack
          width={"100%"}
          mt={"2rem"}
          mb={"2rem"}
          direction={"row"}
          // justifyContent={"space-around"}
          sx={{
            flexDirection: { md: "row", xs: "column" },
          }}
          spacing={{ md: "1rem", xs: "0" }}
        >
          <Box position={"relative"} flexGrow={1}>
            <Typography fontWeight={"600"}>
              Was our restaurant clean?{" "}
              <Typography as={"span"} color={"error"} fontWeight={"900"}>
                *
              </Typography>
            </Typography>
            <Options
              formData={formData}
              name={"cleanliness"}
              changeHandler={handleInputChange}
            />
            {/* Error message modal */}
            {errors.cleanliness && (
              <Stack
                direction={"row"}
                position={"absolute"}
                bottom={"-30px"}
                right={"0"}
                bgcolor={"#FFECED"}
                mt={".5rem"}
                p={"5px"}
                border={"2px solid #FEBFC2"}
                borderRadius={"8px"}
                color={"red"}
                spacing={".5rem"}
                width={"100%"}
              >
                <ErrorOutlineOutlined />{" "}
                <Typography color={"error"} textAlign={"center"}>
                  please select any option.
                </Typography>
              </Stack>
            )}
          </Box>
          <Box position={"relative"} flexGrow={1}>
            <Typography fontWeight={"600"}>
              Please rate your overall dining experience.{" "}
              <Typography as={"span"} color={"error"} fontWeight={"900"}>
                *
              </Typography>
            </Typography>

            <Options
              formData={formData}
              name={"diningQuality"}
              changeHandler={handleInputChange}
            />
            {/* Error message modal */}
            {errors.diningQuality && (
              <Stack
                direction={"row"}
                position={"absolute"}
                bottom={"-30px"}
                right={"0"}
                bgcolor={"#FFECED"}
                mt={".5rem"}
                p={"5px"}
                border={"2px solid #FEBFC2"}
                borderRadius={"8px"}
                color={"red"}
                spacing={".5rem"}
                width={"100%"}
              >
                <ErrorOutlineOutlined />{" "}
                <Typography color={"error"} textAlign={"center"}>
                  please select any option.
                </Typography>
              </Stack>
            )}
          </Box>
        </Stack>

        <Stack direction={"row"} paddingLeft={"2rem"}>
          <Box flex={1}></Box>
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ mt: 2 }}
            width={"100px"}
          >
            Submit Review
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Home;
