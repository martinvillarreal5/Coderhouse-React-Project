import { useState } from "react";
import Box from "@mui/material/Box";

export default function ItemCount({ stock, initial, onAdd }) {
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
          border: ".1rem solid black",
          borderRadius: "1rem",
          p: "1rem",
          width: "fit-content",
        }}
      >
        <h2>Stock: {stock}</h2>
        <h3>Item Count: {count}</h3>
        <button onClick={() => handleIncrease()}>Increase</button>
        <button onClick={() => handleDecrease()}>Remove</button>
        <button onClick={() => setCount(initial)}>Reset</button>
        <button onClick={() => onAdd(count)}>Add to Cart</button>
      </Box>
    </>
  );
}
