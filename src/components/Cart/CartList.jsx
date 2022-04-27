import { Fragment } from "react";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import { Divider } from "@mui/material";
export default function CartList() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div>
        {cart.map((product) => (
          <Fragment key={`cartItemWrapper-${product.id}`}>
            <CartItem key={`cartItem-${product.id}`} product={product} />
            <Divider
              key={`cartDivider-${product.id}`}
              sx={{ mt: "1rem", mb: "1rem" }}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
}
