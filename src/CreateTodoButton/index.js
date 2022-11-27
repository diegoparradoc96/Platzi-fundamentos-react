import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({ openModal, setOpenModal }) {
  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
