import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputMask from "react-input-mask";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const OrderForm = () => {
  const { handleSubmit, control } = useForm();
  const [data, setData] = useState(null);
  const [states, setStates] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleChange = (event) => {
    setStates(event.target.value);
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField
                id="standard-read-only-input"
                label="Card Number"
                name="cardNumber"
                defaultValue="####-####-####-####"
                inputProps={{ maxLength: 19, type: "number" }}
                variant="standard"
                sx={{ p: 1 }}
              />
              <TextField
                id="standard-read-only-input"
                label="Expiration"
                name="dob"
                defaultValue="MM/YY"
                inputProps={{ maxLength: 5 }}
                variant="standard"
                sx={{ p: 1 }}
              />
              <TextField
                id="standard-read-only-input"
                label="CVC"
                defaultValue="###"
                name="cvc"
                inputProps={{ maxLength: 3, type: "number" }}
                variant="standard"
                sx={{ p: 1 }}
              />
            </div>
            <div>
              <TextField
                id="standard-read-only-input"
                label="Cardholder Name"
                type="text"
                defaultValue="John Doe"
                name="name"
                variant="standard"
                inputProps={{ type: "text" }}
                sx={{ p: 1 }}
              />
            </div>
            <div>
              <TextField
                id="standard-read-only-input"
                label="Billing Address"
                name="address"
                defaultValue="Enter your street address"
                variant="standard"
                sx={{ p: 1 }}
              />
            </div>
            <div sx={{ p: 1 }}>
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
                value={states}
                onChange={handleChange}
                placeholder="Select a state"
                variant="standard"
                sx={{ p: 1 }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
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
            </div>
          </form>
          <Grid container justify="center" sx={{ pt: 8 }}>
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
