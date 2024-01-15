import React, { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [trackTodo, setTrackTodo] = useState({ name: "", completed: false });

  function handleTodos(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    setTodos([...todos, trackTodo]);
    setTrackTodo({ name: "", completed: false }); // Clear the input after adding todo
  }

  function handleCompleteTodo(todo) {
    const currentTodo = todos.find((value) => value.name === todo.name);
    const filterTodos = todos.filter((value) => value.name !== todo.name);
    const completedTodo = { name: currentTodo.name, completed: true };
    setTodos([...filterTodos, completedTodo]);
  }

  function handleDeleteTodo(todo) {
    const filterTodos = todos.filter((value) => value.name !== todo.name);
    setTodos(filterTodos);
  }

  return (
    <div className="container">
      <form onSubmit={handleTodos}>
        <input
          type="text"
          value={trackTodo.name}
          onChange={(e) => setTrackTodo({ ...trackTodo, name: e.target.value })}
        />
        <button type="submit" className="todo-btn">
          Add Todo
        </button>
      </form>
      <div className="todos-container">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo.name}
            completed={todo.completed}
            deleteTodo={() => handleDeleteTodo(todo)}
            completeTodo={() => handleCompleteTodo(todo)}
          />
        ))}
      </div>
    </div>
  );
}
