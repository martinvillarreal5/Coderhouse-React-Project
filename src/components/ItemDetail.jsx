import { Box, LinearProgress, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";

export default function ItemDetail({ product, loading }) {
  const { title, description, pictureUrl, price } = product;
  const [inCart, setInCart] = useState(false);
  const { addToCart } = useContext(CartContext);

  const onAdd = (count) => {
    const productToAdd = { ...product, count };
    alert(`Added ${count} items to cart`);
    setInCart(true);
    addToCart(productToAdd);
  };
  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <Box
          sx={{
            border: ".1rem solid black",
            borderRadius: "1rem",
            p: "1rem",
            width: "fit-content",
            mb: "1rem",
            mt: "1rem",
          }}
        >
          <img src={pictureUrl} alt={title} />
          <h2>{title}</h2>
          <h3>${price}</h3>
          <p>{description}</p>
          {inCart ? (
            <Button
              size="small"
              color="primary"
              component={Link}
              to={`/cart`}
              sx={{
                p: 1,
              }}
            >
              Continuar compra
            </Button>
          ) : (
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          )}
        </Box>
      )}
    </>
  );
}
