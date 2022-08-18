import React, { useState } from "react";
import Card from "@mui/material/Card";
import { makeStyles } from "@mui/styles";
import InfoIcon from "@mui/icons-material/Info";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import IcecreamIcon from "@mui/icons-material/Icecream";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const useStyles = makeStyles({
  root: {
    maxWidth: 440,
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Item({
  item,
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Grid container justifyContent="center">
            <IcecreamIcon fontSize="large" />
          </Grid>
        </CardContent>
        <CardContent>Flavor: {item.title}</CardContent>
        <CardContent>Description: {item.description}</CardContent>
        <CardContent>
          Contains: Allergens*
          <IconButton onClick={handleOpen}>
            <InfoIcon />
          </IconButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Allergens:
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Nuts, eggs, soy
              </Typography>
            </Box>
          </Modal>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined">Choose toppings</Button>
        <Button variant="outlined">Choose sauce</Button>
        <Grid container justify="flex-end">
          <Button
            size="medium"
            color="primary"
            onClick={() => handleAddItemToCart(item)}
          >
            <AddCircleOutlineIcon />
          </Button>
          <Button
            size="medium"
            color="primary"
            onClick={() => handleRemoveItemFromCart(item.id)}
          >
            <RemoveCircleOutlineIcon />
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}
