import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
//import InputMask from "react-input-mask";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import states from "../assets/states.js";

const OrderForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
        minWidth="50vw"
        sx={{ p: 2, border: "1px" }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch", gap: 6 },
          }}
          noValidate
          autoComplete="off"
        >
          {/* Dug into using using react-hook-form wuth MUI but had some trouble getting everything working. I could not get controller and register conditions to work 
              Unfortunately, the same goes for Input Mask. The use of it was causing all sorts of errors for me.
          */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <TextField
                id="standard-required"
                label="Card Number"
                name="cardNumber"
                defaultValue="4444-4444-4444-4444"
                inputProps={{ maxLength: 19, type: "number" }}
                variant="standard"
                sx={{ p: 1 }}
              />
              {/* Not entirely sure why input props are only taking affect for some of these text fields... */}
              <TextField
                id="standard-read-only-input"
                label="Expiration"
                name="exp"
                defaultValue="MM/YY"
                inputProps={{ maxLength: 5 }}
                variant="standard"
                sx={{ p: 1 }}
              />
              <TextField
                id="standard-required"
                label="CVV"
                defaultValue="###"
                name="cvv"
                inputProps={{ maxLength: 3, type: "number" }}
                variant="standard"
                sx={{ p: 1 }}
              />
            </Box>
            <Box>
              <TextField
                id="standard-required"
                label="Cardholder Name"
                type="text"
                defaultValue="John Doe"
                name="name"
                variant="standard"
                inputProps={{ type: "text" }}
                sx={{ p: 1 }}
              />
            </Box>
            <Box>
              <TextField
                id="standard-required"
                label="Billing Address"
                name="address"
                defaultValue="Enter your street address"
                variant="standard"
                sx={{ p: 1 }}
              />
            </Box>
            <Box>
              <TextField
                id="standard-required"
                label="City"
                name="city"
                defaultValue="Enter your city"
                variant="standard"
                inputProps={{ type: "text" }}
                sx={{ p: 1 }}
              />
              <TextField
                id="standard-select-currency"
                select
                label="State"
                placeholder="Select a state"
                variant="standard"
                sx={{ p: 1 }}
              >
                {states.map((option, index) => (
                  <MenuItem key={index} value={`${option}`}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="standard-required"
                label="Zip"
                defaultValue="Zip code"
                name="zipCode"
                variant="standard"
                inputProps={{ maxLength: 5, type: "number" }}
                sx={{ p: 1 }}
              />
            </Box>
          </form>
          <Grid container justifyContent={"center"} sx={{ pt: 8 }}>
            <Link to="/confirmation">
              <Button type="submit" variant="outlined">
                Buy Ice Cream
              </Button>
            </Link>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderForm;
