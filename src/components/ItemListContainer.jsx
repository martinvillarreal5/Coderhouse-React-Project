import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import ItemList from "./ItemList";
import products from "../Utils/products";
import { getProducts, getProductByCategory } from "../Utils/customFetch";

export default function ItemListContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productCategory } = useParams();
  

  useEffect(() => {
    let isMounted = true;
    productCategory === undefined ?
      (getProducts(2000, products)
        .then((result) => { 
          if (isMounted) {
          setData(result); setLoading(false) 
          }
        })
        .catch((err) => console.log(err))
      ) : (
        getProductByCategory(2000, products, productCategory)
          .then((result) => { 
            if (isMounted) {
            setData(result); setLoading(false) 
            }
          })
          .catch((err) => console.log(err))
      )
    return () => {
      isMounted = false; // prevent memory leak? or at least prevent "Can't perform a React state update on an unmounted component" warning
    }
  }, [productCategory, data]);



  return (
    <>
      <Container maxWidth="lg">
        <ItemList products={data} loading={loading} />
      </Container>
    </>
  );
}
