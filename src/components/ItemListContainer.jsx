import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import ItemList from "./ItemList";
import products from "../Utils/products";
import customFetch from "../Utils/customFetch";
import ItemCount from "./ItemCount";

export default function ItemListContainer({ greeting }) {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    customFetch(2000, products)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [datos]);

  const onAdd = (count) => {
    alert(`Added ${count} items to cart`);
  };

  return (
    <>
      <Container maxWidth="lg">
        <h1>{greeting}</h1>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
        <ItemList products={datos} />
      </Container>
    </>
  );
}
