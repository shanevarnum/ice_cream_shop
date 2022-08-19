import CartItem from "./CartItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CartList = ({
  cartItems,
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) => {
  const calculeTotal = cartItems.reduce(
    (sum, i) => sum + i.amount * i.price.value,
    0
  );
  return (
    <Box justifyContent={"center"} sx={{ p: 5 }}>
      <Typography id="flavors" variant="h6" component="h2">
        <h1>Flavors</h1>
      </Typography>
      {cartItems.length === 0 ? (
        <Typography id="empty-product" variant="h6" component="h2">
          <h3>No products yet...</h3>
        </Typography>
      ) : null}
      <Box>
        {cartItems.map((i) => (
          <CartItem
            item={i}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
        ))}
      </Box>
      <Typography id="total" variant="h6" component="h2">
        <h2>Total: ${calculeTotal.toFixed(2)}</h2>
      </Typography>
      <Box sx={{ border: 1, width: "100%" }}></Box>
    </Box>
  );
};

export default CartList;
