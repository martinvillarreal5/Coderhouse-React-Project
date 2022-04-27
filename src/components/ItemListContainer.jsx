import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import products from "../Utils/products";
import { getProducts } from "../Utils/customFetch";
import { Typography } from "@mui/material";

export default function ItemListContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productCategory } = useParams();
  const [invalidCategory, setInvalidCategory] = useState(false);

  useEffect(() => {
    setLoading(true);
    let isMounted = true;
    const categories = [
      "category1",
      "category2",
    ]; /* es mala practica declarar variables const en un useEffect???*/
    getProducts(100, products)
      .then((result) => {
        if (isMounted) {
          if (productCategory) {
            categories.includes(
              productCategory
            ) /* Remplazar con un result.find?  */
              ? (result = result.filter(
                  (item) => item.category === productCategory
                ))
              : setInvalidCategory(true);
          }
          setData(result);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    return () => {
      isMounted = false;
      setInvalidCategory(false);
    };
  }, [productCategory]);

  return invalidCategory ? (
    <Typography variant="h4">404 category not found</Typography>
  ) : (
    <ItemList products={data} loading={loading} />
  );
}
