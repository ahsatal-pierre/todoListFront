import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';
import './index.css';

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
    <div className='addingTodo'>
       <div className='formTitle'>{"Add a new task: "}</div>  
    <form className='formBox' onSubmit={handleNewTodoSubmit}>
      <div className='form'>
        <input className='boxTitle' type="text"  placeholder="TITLE required" value={newTodoTitle} onChange={handleNewTodoTitleChange} required />
      
        <textarea className='boxDetail' type="text" placeholder="Todo Details"value={newTodoDescription} onChange={handleNewTodoDescriptionChange} />
        </div>
      <button className='formButton' type="submit">Add this Todo</button>
    </form>
    </div>
  );
};

export default AddTodoForm;