import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Box, Stack } from "@mui/material";
import NavBar from "./NavBar";
import Icecream from "@mui/icons-material/Icecream";

const Confirmation = () => {
  return (
    <Box justifyContent="center">
      <NavBar />
      <Stack sx={{ marginTop: "50px" }}></Stack>
      <Box
        sx={{ border: 1, width: "500px", margin: "auto" }}
        display="flex"
        direction="column"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Icecream />
          <Stack>Order completed!</Stack>
          Thank you for your purchase. You will receive it in 10 minutes
          <Link to="/">
            <Button>Place new Order</Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Confirmation;
