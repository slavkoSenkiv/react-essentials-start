import React from "react";

function Todo(props) {
  return <li>{props.text}</li>;
}
export const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

export default function App() {
  return (
    <div>
      {DUMMY_TODOS.map((task) => (
        <ul>
          <Todo key={task} text={task} />
        </ul>
      ))}
    </div>
  );
}
