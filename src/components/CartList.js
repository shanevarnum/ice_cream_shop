import CartItem from "./CartItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const CartList = ({
  cartItems,
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) => {
  const calculeTotal = cartItems.reduce(
    (sum, i) => sum + i.amount * i.price,
    0
  );
  return (
    <aside>
      <h1>Flavors</h1>
      {cartItems.length === 0 ? <h3>No products yet...</h3> : null}
      <div>
        {cartItems.map((i) => (
          <CartItem
            item={i}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
        ))}
      </div>
      <h2>Total: {calculeTotal.toFixed(2)}</h2>
      <Box sx={{ border: 1, width: "100%" }}></Box>
    </aside>
  );
};
export default CartList;
