import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const AddTodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodoTitle.trim() === '') {
      alert('Todo title cannot be empty');
      return;
    }

    addTodo({
      title: newTodoTitle,
      state: 'pending',
      description: newTodoDescription,
    });

    setNewTodoTitle('');
    setNewTodoDescription('');
  };

  const handleNewTodoTitleChange = (event) => {
    setNewTodoTitle(event.target.value);
  };

  const handleNewTodoDescriptionChange = (event) => {
    setNewTodoDescription(event.target.value);
  };

  return (
    <form onSubmit={handleNewTodoSubmit}>
      <label>
        Title:
        <input type="text"  placeholder="Can't be empty" value={newTodoTitle} onChange={handleNewTodoTitleChange} />
      </label>
      <label>
        Description:
        <textarea value={newTodoDescription} onChange={handleNewTodoDescriptionChange} />
      </label>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;