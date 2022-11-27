import React from "react";

import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter/index.";
import { TodoForm } from "../TodoForm";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../modal";

// import './App.css';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    newTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <p>Estamos cargando, no desesperes</p>}
        {error && <p>Desesperate, hubo un error</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO</p>}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            completeTodo={() => completeTodo(index)}
            deleteTodo={() => deleteTodo(index)}
          />
        ))}
        <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
