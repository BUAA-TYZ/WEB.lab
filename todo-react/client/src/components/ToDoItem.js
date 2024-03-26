import React, { useState } from "react";

import "./ToDoItem.css";

const ToDoItem = (props) => {
  const [isChecked, setChecked] = useState(false);

  const handleChange = () => {
    const val = event.target.checked;
    setChecked(val);
  };

  return (
    <div className="ToDoItem-Item">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className="ToDoItem-ItemContent">
        {isChecked ? (
          <del className="ToDoItem-del">{props.content}</del>
        ) : (
          <>{props.content}</>
        )}
      </span>
      <button onClick={props.deleteItem}>X</button>
    </div>
  );
};

export default ToDoItem;
