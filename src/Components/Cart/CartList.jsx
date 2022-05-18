import { Fragment } from "react";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import { Divider, Typography, Button, Box } from "@mui/material";
export default function CartList() {
  const { cart, cartTotal, clearCart } = useContext(CartContext);

  return (
    <>
      <Box
        sx={{
          mt: "1rem",
        }}>
        <Typography variant="h4" gutterBottom sx={{ mt: "2rem" }}>Your cart</Typography>
        <Divider
          sx={{ mt: "1rem", mb: "1rem" }}
        />
        <Fragment>
          {cart.map((product) => (
            <Fragment key={`cartItemWrapper-${product.id}`}>
              <CartItem key={`cartItem-${product.id}`} product={product} />
              <Divider
                key={`cartDivider-${product.id}`}
                sx={{ mt: "1rem", mb: "1rem" }}
              />
            </Fragment>
          ))}

          <Typography variant="h4" gutterBottom>Total: ${cartTotal()}</Typography>

          <Button variant="contained" onClick={() => clearCart()} sx={{ mb: "1rem" }}>Empty cart</Button>
        </Fragment>
      </Box>
    </>
  );
}
