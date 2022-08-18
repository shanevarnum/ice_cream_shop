import Button from "@mui/material/Button";

const CartItem = ({ item, handleAddItemToCart, handleRemoveItemFromCart }) => {
  return (
    <aside sx={{ ml: 1 }}>
      <div className="itemCart">
        <div>
          <h3>{item.name}</h3>
          <div className="itemInfo">
            <p>Price: ${item.price.value}</p>
          </div>
          <div className="buttons">
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
          </div>
        </div>
      </div>
    </aside>
  );
};
export default CartItem;
