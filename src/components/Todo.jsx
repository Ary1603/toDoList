import React, { useState } from "react";

function Todo({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    function handleSubmit(event) {
      event.preventDefault();
    }

    function handleChange(event) {
      const value = event.target.value;
      setNewValue(value);
    }

    function handleClickUpdateTodo() {
        onUpdate(item.id, newValue)
        setIsEdit(false)
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="btn" onClick={handleClickUpdateTodo}>
          Update
        </button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className="todoTilte">{item.title}</span>
        
        <button className="btn btn-edit" onClick={() => setIsEdit(true)}>Edit</button>
        <button className="btn btn-delete" onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    );
  }
  return (
    <>
      <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>
    </>
  );
}

export default Todo;
