import CartItem from "./CartItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

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
      <h1>Flavors</h1>
      {cartItems.length === 0 ? <h3>No products yet...</h3> : null}
      <Box>
        {cartItems.map((i) => (
          <CartItem
            item={i}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
        ))}
      </Box>
      <h2>Total: ${calculeTotal.toFixed(2)}</h2>
      <Box sx={{ border: 1, width: "100%" }}></Box>
    </Box>
  );
};
export default CartList;
