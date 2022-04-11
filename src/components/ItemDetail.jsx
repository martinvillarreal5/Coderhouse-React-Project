import { Box, Container, LinearProgress } from "@mui/material";
import ItemCount from "./ItemCount";

export default function ItemDetail({ product, loading }) {
  const { id, title, description, pictureUrl, price } = product;
  const onAdd = (count) => {
    alert(`Added ${count} items to cart`);
  };
  return (
    <>
      <Container maxWidth="lg">
        {loading ? (
          <LinearProgress sx={{mt: "1rem"}}/>
        ) : (
          <Box
            sx={{
              border: ".1rem solid black",
              borderRadius: "1rem",
              p: "1rem",
              width: "fit-content",
              mb: "1rem",
              mt: "1rem",
            }}
          >
            <img src={pictureUrl} alt={title} />
            <h2>{title}</h2>
            <h3>${price}</h3>
            <p>{description}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          </Box>
        )}
      </Container>
    </>
  );
}
