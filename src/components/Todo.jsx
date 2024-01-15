import "./CSS/todo.css";

export default function Todo({ todo, completeTodo, completed, deleteTodo }) {
  return (
    <div className="todo-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 500,
          padding: "5px",
          textDecoration: completed ? "line-through" : undefined,
        }}
      >
        <h2>{todo}</h2>
        <div className="btns">
          <button onClick={completeTodo}>Complete</button>
          <button onClick={deleteTodo}>Delete</button>
        </div>
      </div>
    </div>
  );
}
