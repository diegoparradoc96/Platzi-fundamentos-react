import React from "react";
import { TodoProvider } from "../TodoContext";
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

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
