import React from "react";
import ItemCount from "./ItemCount";
import Container from "@mui/material/Container";

export default function ItemListContainer({ greeting }) {
  const onAdd = (count) => {
    alert(`Added ${count} to cart`);
    
  };
  return (
    <>
      <Container maxWidth="xl">
        <h1>{greeting}</h1>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </Container>
    </>
  );
}
