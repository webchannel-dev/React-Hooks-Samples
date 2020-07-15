import React, { useState, useReducer } from "react";

const ACTION = {
  ADD_TODO: "add_todo",
  DEL_TODO: "remove_todo",
  TOGGLE_TODO: "toggle_todo"
};
function reducer(todo, action) {
  console.log(action.payload, todo);
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todo, newTodo(action.payload.name)];
    case ACTION.DEL_TODO:
      return todo.filter(item => item.id !== action.payload.id);
    default:
      return todo;
  }
}

function newTodo(name) {
  return { id: Date.now(), name, isDone: false };
}

export default () => {
  const [state, dispatch] = useReducer(reducer, [
    newTodo("todo 1"),
    newTodo("todo 2")
  ]);
  const [name, setName] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    console.log(name);
    dispatch({ type: ACTION.ADD_TODO, payload: { name } });
    setName("");
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          name="todo-input"
          value={name}
          type="text"
          placeholder="list your todos"
          onChange={e => setName(e.target.value)}
        />
      </form>

      {state.length > 0 &&
        state.map((item, key) => (
          <li key={key} style={{ color: "red" }}>
            {item.name}
            <button>Done</button>
            <button
              onClick={() =>
                dispatch({ type: ACTION.DEL_TODO, payload: { id: item.id } })
              }
            >
              DEL
            </button>
          </li>
        ))}
    </>
  );
};
