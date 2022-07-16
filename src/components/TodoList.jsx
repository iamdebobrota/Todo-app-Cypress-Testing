import React from "react";

const TodoList = ({ todos = [] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox"
          data-testid="todo-checkbox"
           value={todo.isCompleted} />
          <span data-testid="todo-value">{todo.value}</span>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
