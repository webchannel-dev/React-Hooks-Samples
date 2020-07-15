import React from "react";
import "./styles.css";

import Counter from "./components/counter/Counter";
import CounterWithUseReducer from "./components/counter/CounterWithUseReducer";
import ToDo from "./components/todo/ToDo";
import ReactHooksFetchFromAPI from "./components/apiFetch/ReactHooksFetchFromAPI";

export default function App() {
  return (
    <div className="App">
      <ToDo />
      <hr />
      <Counter />
      <hr />
      <CounterWithUseReducer />
      <hr />
      <ReactHooksFetchFromAPI />
    </div>
  );
}
