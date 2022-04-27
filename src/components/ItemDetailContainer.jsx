import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../Utils/customFetch";
import products from "../Utils/products";
import { Typography } from "@mui/material";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const [invalidId, setInvalidId] = useState(false);

  useEffect(() => {
    getProducts(100, products)
      .then((result) => {
        result.find((item) => item.id === productId)
          ? setProduct(result.find((item) => item.id === productId))
          : setInvalidId(true);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    return () => {
      setInvalidId(false);
    };
  }, [productId]);

  return invalidId ? (
    <Typography variant="h4">404 item not found</Typography>
  ) : (
    <ItemDetail key={productId} product={product} loading={loading} />
  );
}
