import React from "react";

function ToDoItem(item) {
  const completedStyle = {
    color: "grey",
    fontStyle: "italic",
    textDecoration: "line-through"
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        onChange={() => item.handleChange(item.item.id)}
        checked={item.item.completed}
      />

      <p style={item.item.completed ? completedStyle : null}>
        {item.item.text}
      </p>
    </div>
  );
}

export default ToDoItem;
