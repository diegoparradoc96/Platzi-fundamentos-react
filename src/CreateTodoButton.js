import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClicButton = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClicButton("Aqui se deberia abrir un modal")}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
