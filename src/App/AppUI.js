import React from "react";

import { TodoCounter } from "../TodoCounter/index.";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";

// import './App.css';

function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  newTodo,
}) {
  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

  
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
      </TodoList>
      <CreateTodoButton newTodo={newTodo} />
    </React.Fragment>
  );
}

export { AppUI };
