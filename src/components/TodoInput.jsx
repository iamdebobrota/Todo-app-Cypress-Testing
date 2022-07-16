import React from "react";

const TodoInput = ({ value, handleChange, handleSubmit }) => {
  const submit = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <form onSubmit={submit}>
      <input type="text" 
      id="new-todo"
      data-testid="todo-input-class" value={value} onChange={handleChange} />
      <button type="submit"
       data-testid="todo-btn"
       >Add</button>
    </form>
  );
};

export default TodoInput;
