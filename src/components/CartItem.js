import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const CartItem = ({ item, handleAddItemToCart, handleRemoveItemFromCart }) => {
  return (
    <aside sx={{ ml: 1 }}>
      <div className="itemCart">
        <div>
          <h3>{item.name}</h3>
          <div className="itemInfo">
            <p>Price: ${item.price.value}</p>
          </div>
          <Stack direction="row" className="buttons" gap={5}>
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => handleAddItemToCart(item)}
            >
              +
            </Button>
            <p> {item.amount} </p>
            <Button
              onClick={() => handleRemoveItemFromCart(item.name)}
              size="small"
              disableElevation
              variant="contained"
            >
              -
            </Button>
          </Stack>
        </div>
      </div>
    </aside>
  );
};
export default CartItem;
