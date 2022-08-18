import { useState, useEffect } from "react";
import { useQuery } from "react-query";
//Components
import Item from "./components/Item";
import CartList from "./components/CartList";
import NavBar from "./components/NavBar";
import Drawer from "@mui/material/Drawer";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./custom.css";
import OrderForm from "./components/OrderForm";
import IcecreamIcon from "@mui/icons-material/Icecream";

const getProducts = async () =>
  await (await fetch("https://fakestoreapi.com/products/")).json();

const App = () => {
  const { isLoading, error, data } = useQuery("products", getProducts);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [query, setQuery] = useState("");

  const getTotalItems = (cartItems) =>
    cartItems.reduce((acum, i) => acum + i.amount, 0);

  const handleAddItemToCart = (item) => {
    setCartItems((prev) => {
      // Search the item in the array
      const isItemInTheCart = prev.find((i) => i.id === item.id);
      if (isItemInTheCart) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount + 1 } : i
        );
      }
      return [...prev, { ...item, amount: 1 }];
    });
  };

  const handleRemoveItemFromCart = (id) => {
    setCartItems((prev) => {
      const foundItem = prev.find((i) => i.id === id);
      if (foundItem) {
        if (foundItem.amount === 1) {
          const newArray = prev.filter((i) => i.id !== id);
          return newArray;
        } else {
          return prev.map((i) =>
            i.id === id ? { ...i, amount: i.amount - 1 } : i
          );
        }
      } else {
        return prev;
      }
    });
  };
  if (isLoading) return <LinearProgress />;
  if (error) return error.message;
  return (
    <>
      <NavBar
        position="sticky"
        getTotalItems={getTotalItems(cartItems)}
        setCartOpen={setCartOpen}
      ></NavBar>
      <div className="main">
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <CartList
            cartItems={cartItems}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
          <OrderForm />
        </Drawer>
        {/*start of search section */}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { mb: 1, mt: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Choose a flavor"
            variant="outlined"
            onChange={(event) => setQuery(event.target.value)}
          />
        </Box>
        <Grid container spacing={3}>
          {data
            .filter((item) => {
              if (query === "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(query.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => {
              return (
                <Grid key={item.id} item xs={12} sm={4}>
                  <Item
                    item={item}
                    handleAddItemToCart={handleAddItemToCart}
                    getTotalItems={getTotalItems(cartItems)}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
};

export default App;
