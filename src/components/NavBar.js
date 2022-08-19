import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Icecream } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
}));

export default function NavBar({ getTotalItems, setCartOpen }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );
  const mobileMenuId = "primary-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    ></Menu>
  );
  return (
    <Box className={classes.grow}>
      <AppBar position="sticky">
        <Toolbar>
          <Icecream />
          <b>Ice Cream Test</b>
          <Box className={classes.grow} />
          <Box onClick={() => setCartOpen(true)}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={getTotalItems} color="secondary">
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
