import React, { useState } from "react";
import Todo from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [TrackTodo, setTrackTodo] = useState({ name: "", completed: false });

  function handleTodos() {
    setTodos([...todos, TrackTodo]);
  }

  function handleCompleteTodo(todo) {
    const currentTodo = todos.filter((value) => value.name === todo.name);
    const filterTodos = todos.filter((value) => value.name !== todo.name);
    const completedTodo = { name: currentTodo[0].name, completed: true };
    setTodos([...filterTodos, completedTodo]);
  }

  function handleDeleteTodo(todo) {
    const filterTodos = todos.filter((value) => value.name !== todo.name);
    setTodos(filterTodos);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            todo={todo.name}
            completed={todo.completed}
            deleteTodo={() => handleDeleteTodo(todo)}
            completeTodo={() => handleCompleteTodo(todo)}
          />
        );
      })}
      <input
        type="text"
        onChange={(e) => {
          setTrackTodo({ completed: false, name: e.target.value });
        }}
      />
      <button onClick={handleTodos}>Add Todo</button>
    </form>
  );
}
