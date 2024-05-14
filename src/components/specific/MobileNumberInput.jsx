import { ErrorOutlineOutlined } from "@mui/icons-material";
import { MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";

const countries = [
  { code: "IN", prefix: "+91", name: "India", pattern: /^\d{10}$/ },
  { code: "US", prefix: "+1", name: "United States", pattern: /^\d{10}$/ },
  { code: "UK", prefix: "+44", name: "United Kingdom", pattern: /^\d{10,12}$/ },
  { code: "BD", prefix: "+880", name: "Bangladesh", pattern: /^\d{11}$/ },
  { code: "lk", prefix: "+94", name: "Sri Lanka", pattern: /^\d{9,10}$/ },
  { code: "CN", prefix: "+86", name: "China", pattern: /^\d{11}$/ },
  { code: "SA", prefix: "+966", name: "Saudi Arabia", pattern: /^\d{9}$/ },
  // Add more countries as needed with their respective regex patterns
];

const MobileNumberInput = ({ numberState, setNumberState, error }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [mobileNumber, setMobileNumber] = useState(numberState.number);

  const handleCountryChange = (e) => {
    const selectedCode = e.target.value;
    const selected = countries.find((country) => country.code === selectedCode);
    setSelectedCountry(selected);
  };

  const handleMobileNumberChange = (e) => {
    const number = e.target.value;
    setMobileNumber(number);
    if (!selectedCountry.pattern.test(number)) {
      setNumberState({ ...numberState, error: true });
    } else {
      setNumberState({
        ...numberState,
        error: false,
        number,
        country: selectedCountry.prefix,
      });
    }
  };

  useEffect(() => {
    setMobileNumber("");
  }, [numberState.number]);

  return (
    <Stack
      direction={"row"}
      spacing={"1rem"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        maxWidth: { md: "50%", xs: "100%" },
      }}
      position={"relative"}
      mb={"1rem"}
    >
      <Select
        labelId="country-label"
        id="country"
        value={selectedCountry.code}
        onChange={handleCountryChange}
        sx={{
          padding: "0",
        }}
      >
        {countries.map((country) => (
          <MenuItem key={country.code} value={country.code}>
            {country.code}
            <ReactCountryFlag
              countryCode={country.code}
              svg
              style={{
                width: "fit-content",
                height: "1.5em",
                marginLeft: "10px",
              }}
              title={country.code}
            />
          </MenuItem>
        ))}
      </Select>

      <TextField
        id="mobileNumber"
        // label="Mobile Number"
        sx={{
          flexGrow: 1,
        }}
        type="number"
        placeholder="9999999"
        value={mobileNumber}
        onChange={handleMobileNumberChange}
        error={Boolean(numberState.error)}
        // helperText={errorMessage}
      />

      {/* Error message modal */}
      {(numberState.error || error) && (
        <Stack
          direction={"row"}
          position={"absolute"}
          bottom={"-40px"}
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
            please Enter a valid mobile number.
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default MobileNumberInput;
