import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CartItem = ({ item, handleAddItemToCart, handleRemoveItemFromCart }) => {
  return (
    <aside sx={{ ml: 1 }}>
      <Box className="itemCart">
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h3>{item.name}</h3>
          </Typography>
          <Box className="itemInfo">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <p>Price: ${item.price.value}</p>
            </Typography>
          </Box>
          <Stack direction="row" className="buttons" gap={3}>
            <Button
              onClick={() => handleAddItemToCart(item)}
              size="medium"
              color="primary"
            >
              <AddCircleOutlineIcon />
            </Button>
            <p> {item.amount} </p>
            <Button
              onClick={() => handleRemoveItemFromCart(item.name)}
              size="medium"
              color="primary"
            >
              <RemoveCircleOutlineIcon />
            </Button>
          </Stack>
        </Box>
      </Box>
    </aside>
  );
};
export default CartItem;
