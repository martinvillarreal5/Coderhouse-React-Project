import { Box, LinearProgress, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../CartContext";
import { Image } from "mui-image";

export default function ItemDetail({ product, loading }) {
  const { title, description, imageUrlFront, price, stock } = product;
  const [inCart, setInCart] = useState(false);
  const { addToCart } = useContext(CartContext);

  const onAdd = (count) => {
    const productToAdd = { ...product, count };
    alert(`Added ${count} items to cart`);
    setInCart(true);
    addToCart(productToAdd);
  };

  if (loading) {
    return <LinearProgress />
  } else {
    return (
      <>
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 2 }}
          columns={{ xs: 1, sm: 4, md: 12 }}
          mb={3}
        >
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Image src={imageUrlFront} alt={title}
                showLoading={false}
                width="100%"
                height="100%"
                fit="contain"
                bgColor="white"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                border: ".1rem solid grey",
                p: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4">{title}</Typography>
              <Typography variant="h3">${price}</Typography>
              <Typography variant="body1" gutterBottom>{description}</Typography>
              <ItemCount onAdd={onAdd} stock={stock}/>
              {inCart ? <Button variant="contained" component={Link} to="/cart">Go to Cart</Button> : ""}
            </Box>
          </Grid>
        </Grid>
      </>
    );
  }
}
