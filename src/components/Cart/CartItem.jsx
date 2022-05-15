import { CartContext } from "../CartContext";
import { useContext } from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
//import { Grid } from "@mui/material";

export default function CartItem({ product }) {
  const { id, title, imageUrlFront, price, count } = product;
  const { removeFromCart } = useContext(CartContext);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "fit-content",
        }}
      >
        <CardMedia
          component="img"
          image={imageUrlFront}
          alt="random item"
          sx={{
            width: "5rem",
            objectFit: "cover",
            mr: "1rem",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flex: "1 0 auto",
          }}
        >
          <Box>
            <Typography
              component="div"
              fontSize={{ xs: "1.25rem", md: "1.75rem" }}
            >
              {title}
            </Typography>
            <IconButton onClick={() => removeFromCart(id)} sx={{ p: "0" }}>
              <DeleteForeverIcon />
            </IconButton>
          </Box>
          <Box></Box>
          <Box>
            <Typography
              component="div"
              fontSize={{ xs: "1.25rem", md: "1.75rem" }}
            >
              ${price * count}({count} x ${price})
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
