import React, { useState } from "react";

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
      <div>
        <h2>Item Count</h2>
        <h3>{count}</h3>
        <button onClick={() => handleIncrease()}>Increase</button>
        <button onClick={() => handleDecrease()}>Remove</button>
        <button onClick={() => setCount(initial)}>Reset</button>
        <button onClick={() => onAdd(count)}>Add to Cart</button>
      </div>
    </>
  );
}
