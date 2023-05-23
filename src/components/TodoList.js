
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from './TodoContext';
import AddTodoForm from './AddTodoForm';
import Timer from './Timer';
import '../index.css';

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
      <h1 className='title'>Todo List</h1>
      <Timer />
      <AddTodoForm />
      <div className="overflow-scroll-gradient">
      <ol className='overflow-scroll-gradient-scroller list'>
      {todos.map((todo) => (
  <li className='' key={todo.id}>
    <Link
      to={`/todo/${todo.id}`}
      state={{ description: todo.description, title: todo.title }}
      style={{ textDecoration: todo.state === 'completed' ? 'line-through' : 'none' }}
    >
      {todo.title}
    </Link>
    <div>
      <input
        type="checkbox"
        checked={todo.state === 'completed'}
        onChange={() => handleTodoStateChange(todo.id)}
      />
      <span>
        {todo.state === 'completed' ? '(pending?)' : '(completed?)'}
      </span>
    </div>
  </li>
))}
      </ol>
      </div>
    </div>
  );
};

export default TodoList;
