import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import ItemList from "./ItemList";
import products from "../Utils/products";
import customFetch from "../Utils/customFetch";

export default function ItemListContainer({ greeting }) {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    customFetch(2000, products)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [datos]);

  return (
    <>
      <Container maxWidth="lg">
        <h1>{greeting}</h1>

        <ItemList products={datos} />
      </Container>
    </>
  );
}
