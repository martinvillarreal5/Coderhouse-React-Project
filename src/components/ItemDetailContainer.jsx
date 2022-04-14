import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { getProduct } from "../Utils/customFetch";
import products from "../Utils/products";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    getProduct(2000, products, productId)
      .then((result) => { setProduct(result); setLoading(false) })
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <>
      <ItemDetail key={productId} product={product} loading={loading} />
    </>
  );
}
