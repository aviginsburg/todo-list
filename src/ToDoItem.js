import React from "react";

function ToDoItem(item) {
  console.log(item);
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        onChange={() => item.handleChange(item.item.id)}
        checked={item.item.completed}
      />
      <p>{item.item.text}</p>
    </div>
  );
}

export default ToDoItem;
