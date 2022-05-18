import { useState } from "react";
import { Typography, Box, Button, ButtonGroup } from "@mui/material";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    count < stock
      ? setCount(count + 1)
      : alert(`Sorry, we only have ${stock} in stock`);
  };
  const handleDecrease = () => {
    count > initial
      ? setCount(count - 1)
      : alert(`Sorry, you can't have less than ${initial}`);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ButtonGroup sx={{mb:".75rem"}} aria-label="increase and remove button group">
          <Button onClick={() => handleDecrease()}>-</Button>
          <Button onClick={() => handleIncrease()}>+</Button>
        </ButtonGroup>
        <Button  variant="contained" onClick={() => onAdd(count)} >Add {count} to Cart</Button>
        <Button onClick={() => setCount(initial)}>Reset</Button>
        <Typography
          variant="h5"
          gutterBottom
        >
          Stock: {stock}
        </Typography>
      </Box>
    </>
  );
}
