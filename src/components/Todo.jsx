export default function Todo({ todo, completeTodo, completed, deleteTodo }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: 300,

        textDecoration: completed ? "line-through" : undefined,
      }}
    >
      <h2>{todo}</h2>
      <div>
        <button onClick={completeTodo}>Complete</button>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
}