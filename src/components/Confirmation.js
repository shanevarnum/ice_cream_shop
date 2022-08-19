import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Box, Stack } from "@mui/material";
import NavBar from "./NavBar";
import Typography from "@mui/material/Typography";
import Icecream from "@mui/icons-material/Icecream";

const Confirmation = () => {
  return (
    <Box justifyContent={"center"}>
      <NavBar />
      <Stack sx={{ mt: "50px" }}></Stack>
      <Box
        sx={{ border: 1, width: "600px", margin: "auto" }}
        display="flex"
        direction="column"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Icecream fontSize="large" color="secondary" background="primary" />
          <Stack>
            <Typography id="confirmation" variant="h6" component="h2">
              Order completed!
            </Typography>
          </Stack>
          <Typography id="banner" variant="h6" component="h2">
            Thank you for your purchase. You will receive it in 10 minutes
          </Typography>
          <Link to="/">
            <Button>
              <Typography id="order" variant="h6" component="h3">
                Place new Order
              </Typography>
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Confirmation;
