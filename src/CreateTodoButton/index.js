import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({ newTodo }) {
  return (
    <button className="CreateTodoButton" onClick={newTodo}>
      +
    </button>
  );
}

export { CreateTodoButton };
