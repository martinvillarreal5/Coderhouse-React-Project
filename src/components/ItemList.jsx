import React from "react";
import { Grid, LinearProgress } from "@mui/material";
import Item from "./Item";

export default function ItemList({ products, loading }) {
  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 4 }}
          columns={{ xs: 4, sm: 9, md: 12 }}
        >
          {products.map((product) => (
            <Item product={product} key={product.id}/>
          ))}
        </Grid>
      )}
    </>
  );
}
