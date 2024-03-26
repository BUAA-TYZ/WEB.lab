import React from "react";
import ToDoList from "./ToDoList";

import "./App.css";

const App = (props) => {
  return (
    <div className="App-Title">
      <h1>TYZ's TO-DO LIST!</h1>
      <hr />
      <ToDoList />
    </div>
  );
};

export default App;
