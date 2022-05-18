import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { Typography } from "@mui/material";

export default function ItemListContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemCategory } = useParams();
  const [invalidCategory, setInvalidCategory] = useState(false);

  useEffect(() => {
    setLoading(true);
    let isMounted = true;
    const db = getFirestore();
    
    getDocs(
      itemCategory ? query(collection(db, "items"), where("categoryId", "==", itemCategory))
        : collection(db, "items")
    )
      .then((snapshot) => {
        if (snapshot.size === 0) {
          itemCategory ? setInvalidCategory(true) : console.log("No items found"); 
        } else {
          if (isMounted) {
            const items = snapshot.docs.map((item) => {
              return {
                id: item.id,
                ...item.data(),
              };
            });
            setData(items);
          }
        }
        })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    return () => {
      isMounted = false;
      setInvalidCategory(false);
    };
  }, [itemCategory]);

  return invalidCategory ? (
    <Typography variant="h4">404 category not found</Typography>
  ) : (
    <ItemList products={data} loading={loading} />
  );
}
