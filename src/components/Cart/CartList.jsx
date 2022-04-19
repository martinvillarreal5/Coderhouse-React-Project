import { CartContext } from "../CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import { Box } from "@mui/material";
export default function CartList() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <h1>Cart</h1>
      <div>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
