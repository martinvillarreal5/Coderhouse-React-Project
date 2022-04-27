import { useContext } from "react";
import { CartContext } from "./CartContext";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { cartTotalCount } = useContext(CartContext);

  return (
    <>
      <IconButton aria-label="cart" color="inherit" component={Link} to="/cart">
        <Badge
          badgeContent={cartTotalCount()}
          max={999}
          color="error"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <ShoppingCartIcon sx={{p: "0"}}/>
        </Badge>
      </IconButton>
    </>
  );
}
