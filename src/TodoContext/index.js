import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("Todos_V1", []);

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      let todoText = todo.text.toLowerCase();
      let searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  /* functions */

  const completeTodo = (todoIndex) => {
    const newTodos = todos.map((todo, index) => {
      if (index == todoIndex) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    saveTodos(newTodos);
  };

  const deleteTodo = (todoIndex) => {
    const newTodos = todos.slice();
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const newTodo = () => {
    const todo = [
      {
        text: "Cortar cebolla",
        completed: true,
      },
      {
        text: "Tomar curso intro a react",
        completed: false,
      },
      {
        text: "Llorar con la llorona",
        completed: false,
      },
    ];
    saveTodos(todo);
  };

  return (
    <TodoContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
