import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

import "./ToDoList.css";

const ToDoList = (props) => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const updateText = () => {
    setInputText(event.target.value);
  };

  const deleteItem = (nth) => {
    const newTodos = todos.slice();
    newTodos.splice(nth, 1);
    setTodos(newTodos);
  };

  const addItem = () => {
    if (inputText !== "") {
      todos.push(inputText);
      console.log(todos);
      setInputText("");
    }
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li>
            <ToDoItem
              key={`ListItem-${index}`}
              content={todo}
              deleteItem={() => deleteItem(index)}
            />
          </li>
        ))}
      </ul>
      <input
        className="ToDoList-Textbox"
        type="text"
        value={inputText}
        onChange={updateText}
      />
      <button className="ToDoList-Button" onClick={addItem}>
        Add to-do!
      </button>
    </div>
  );
};

export default ToDoList;
