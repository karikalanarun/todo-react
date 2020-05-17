import React from "react";

export default ({ list }) => {
  return (
    <ul>
      {list.map((todo) => (
        <li key={todo.id} className={(todo.completed && "checked") || null}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};
