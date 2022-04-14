import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import products from "../Utils/products";
import { getProducts, getProductByCategory } from "../Utils/customFetch";

export default function ItemListContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productCategory } = useParams();

  useEffect(() => {
    setLoading(true); // set loading to true to show loading indicator when category changes
    let isMounted = true;
    const categories = ["category1", "category2"];
    categories.includes(productCategory) ?
      (getProductByCategory(2000, products, productCategory)
        .then((result) => {
          if (isMounted) {
            setData(result); setLoading(false)
          }
        })
        .catch((err) => console.log(err))
      ) : productCategory === undefined /* replace this condition*/ ?
        (getProducts(2000, products)
          .then((result) => {
            if (isMounted) {
              setData(result); setLoading(false)
            }
          })
          .catch((err) => console.log(err))
        )
        : console.log("invalid category") /* make a 404 error page for this */;

    return () => {
      isMounted = false; // prevent memory leak? or at least prevent "Can't perform a React state update on an unmounted component" warning
    }
  }, [productCategory]);

  return (
    <>
      <ItemList products={data} loading={loading} />
    </>
  );
}
