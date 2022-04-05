import React, { useState } from "react";
import Box from "@mui/material/Box";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert(`Sorry, we only have ${stock} in stock`);
    }
  };
  const handleDecrease = () => {
    if (count > initial) {
      setCount(count - 1);
    } else {
      alert(`Sorry, you can't have less than ${initial}`);
    }
  };

  return (
    <>
      <Box
        sx={{
          border: ".1rem solid black",
          borderRadius: "1rem",
          p: "1rem",
          width: "fit-content",
          mb: "1rem",
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
