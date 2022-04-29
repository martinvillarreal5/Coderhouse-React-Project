import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Typography } from "@mui/material";

import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();
  const [invalidId, setInvalidId] = useState(false);

  useEffect(() => {
    setLoading(true);
    let isMounted = true;
    getDoc(doc(getFirestore(), "items", itemId))
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          if (isMounted) {
            //console.log("Document data:", docSnapshot.data());
            const product = { id: docSnapshot.id, ...docSnapshot.data() };
            setProduct(product);
          }
        } else {
          setInvalidId(true);
        }

      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    return () => {
      isMounted = false;
      setInvalidId(false);
    };
  }, [itemId]);

  return invalidId ? (
    <Typography variant="h4">404 item not found</Typography>
  ) : (
    <ItemDetail key={itemId} product={product} loading={loading} />
  );
}
