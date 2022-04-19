import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../Utils/customFetch";
import products from "../Utils/products";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const [invalidId, setInvalidId] = useState(false);

  useEffect(() => {
    getProducts(2000, products)
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

  return (invalidId
    ? <h3>404 item not found</h3>
    : <ItemDetail key={productId} product={product} loading={loading} />
  );
}
