import { Container, Box, Divider } from "@mui/material/";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import CategoryButton from "./CategoryButton";

export default function CategoryNav() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const db = getFirestore();
    getDocs(collection(db, "categories"))
      .then((snapshot) => {
        if (snapshot.size > 0) {
          if (isMounted) {
            const categories = snapshot.docs.map((category) => {
              return {
                id: category.id,
                ...category.data(),
              };
            });
            setCategories(categories);
          }
        } else {
          console.log("snapshot not found");
        }
      }).catch((err) => console.log(err))
      .finally(() => setLoading(false))
    return () => {
      isMounted = false;
    }
  }, [categories])

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          p: 2,
        }}
      >
        {
            categories.map((category) => (
              <CategoryButton key={category.id} category={category} isLoading={loading} />
            ))
        }
      </Box>
      <Divider sx={{ mb: "1rem" }} />
    </Container>
  );
}
