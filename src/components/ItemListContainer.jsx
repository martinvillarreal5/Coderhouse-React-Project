import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import ItemList from "./ItemList";
import products from "../Utils/products";
import {getProducts} from "../Utils/customFetch";

export default function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getProducts(2000, products)
      .then((result) => {setData(result); setLoading(false)})
      .catch((err) => console.log(err));
  }, [data]);

  

  return (
    <>
      <Container maxWidth="lg">
        <h1>{greeting}</h1>
        <ItemList products={data} loading={loading}/>
      </Container>
    </>
  );
}
