import React, { useReducer } from "react";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
};
const reducer = (count, action) => {
  switch (action.type) {
    case ACTION.DECREMENT:
      return count - 1;

    case ACTION.INCREMENT:
      return count + 1;

    default:
      return count;
  }
};

export default () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>Counter with React useReducer Hooks</h1>
      <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
    </>
  );
};
