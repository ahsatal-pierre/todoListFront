
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from './TodoContext';

const TodoList = () => {
  const { todos, updateTodoState, addTodo } = useContext(TodoContext);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodoTitle.trim() === '') {
      alert('Todo title cannot be empty');
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      state: 'pending',
      description: newTodoDescription,
    };
  
    addTodo(newTodo);

    setNewTodoTitle('');
    setNewTodoDescription('');
  };


  const handleNewTodoTitleChange = (event) => {
    setNewTodoTitle(event.target.value);
  };

  const handleNewTodoDescriptionChange = (event) => {
    setNewTodoDescription(event.target.value);
  };

  const handleTodoStateChange = (todoId) => {
    updateTodoState(todoId);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleNewTodoSubmit}>
        <label>
          Title:
          <input type="text" value={newTodoTitle} onChange={handleNewTodoTitleChange} />
        </label>
        <label>
          Description:
          <textarea value={newTodoDescription} onChange={handleNewTodoDescriptionChange} />
        </label>
        <button type="submit">Add Todo</button>
      </form>
      <ol>
        {todos.map((todo) => ( <li
            key={todo.id}
            style={{ textDecoration: todo.state === 'completed' ? 'line-through' : 'none' }}
          >
            <input
              type="checkbox"
              checked={todo.state === 'completed'}
              onChange={() => handleTodoStateChange(todo.id)}
            />
                  <Link to={`/todo/${todo.id}`} state={{ description: todo.description, title: todo.title }}>
              {todo.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
