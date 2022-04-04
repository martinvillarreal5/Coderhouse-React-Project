import React from "react";
import {Grid, LinearProgress} from "@mui/material";
import Item from "./Item";

export default function ItemList({ products }) {
  return (
    <>
      {products.length < 1 ? (
        <LinearProgress />

      ) : (
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 4 }}
          columns={{ xs: 4, sm: 9, md: 12 }}
        >
          {products.map((product) => (
            <Item
              key={product.id}
              title={product.title}
              description={product.description}
              pictureUrl={product.pictureUrl}
              price={product.price}
            />
          ))}
        </Grid>
      )}
    </>
  );
}
