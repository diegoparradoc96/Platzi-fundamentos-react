import React, { useEffect } from "react";

import { AppUI } from "./AppUI";

// const defaultTodos = [
//   {
//     text: "Cortar cebolla",
//     completed: true,
//   },
//   {
//     text: "Tomar curso intro a react",
//     completed: false,
//   },
//   {
//     text: "Llorar con la llorona",
//     completed: false,
//   },
// ];

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const getItem = JSON.parse(localStorage.getItem(itemName));
        let defaultItem;

        if (!getItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          defaultItem = initialValue;
        } else {
          defaultItem = getItem;
        }

        setItem(defaultItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      const itemToSave = JSON.stringify(newItem);
      localStorage.setItem(itemName, itemToSave);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
}

function App() {
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
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      newTodo={newTodo}
    />
  );
}

export default App;
