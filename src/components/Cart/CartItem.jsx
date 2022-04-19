import { CartContext } from "../CartContext";
import { useContext } from "react";
import { Box } from "@mui/material";

export default function CartItem({ product }) {
  const { id, title, description, pictureUrl, price, count } = product;
  const { removeFromCart, buyAll, clearCart } = useContext(CartContext);
  return (
    <Box>
      <img src={pictureUrl} alt={title} />
      <h2>{title}</h2>
    </Box>
  );
}
