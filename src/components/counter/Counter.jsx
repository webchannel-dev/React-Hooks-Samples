import React, { useState } from "react";

export default () => {
  const [count, setCount] = useState(10);

  const increment = () => {
    // console.log("add");
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    // console.log("remove");
    setCount(prevCount => prevCount - 1);
  };

  return (
    <>
      <h1>Counter with React useState Hooks</h1>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </>
  );
};
