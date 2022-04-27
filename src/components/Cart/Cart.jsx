import { CartContext } from "../CartContext";
import { useContext } from "react";
import CartList from "./CartList";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartTotal } = useContext(CartContext);
  //const { loading, setLoading } = useState(true);
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <Typography variant="h6">Your cart is empty.</Typography>
        <Button variant="contained" component={Link} to="/">
          Continue Shopping
        </Button>
      </>
    );
  }

  return (
    <>
      <CartList />
      <Typography variant="h4">Total: ${cartTotal()}</Typography>
    </>
  );
}
