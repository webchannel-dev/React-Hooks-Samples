import React, { useState, useEffect } from "react";

export default () => {
  const [input, setInput] = useState("users");
  const [userInput, setUserInput] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${input}`)
      .then(response => response.json())
      .then(json => setUserInput(json));
  }, [input]);

  const requestHandel = type => {
    setInput(type);
  };

  return (
    <div className="App">
      {/* <button onClick={() => requestHandel("posts")}>Posts</button> */}
      <button onClick={() => requestHandel("comments")}>Comments</button>
      <button onClick={() => requestHandel("users")}>Users</button>

      <h2> List of the {input} </h2>

      {userInput &&
        userInput.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
          </li>
        ))}
    </div>
  );
};
