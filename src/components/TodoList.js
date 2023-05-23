
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from './TodoContext';
import AddTodoForm from './AddTodoForm';
import Timer from './Timer';
import '../index.css';

const TodoList = () => {
  const { todos, updateTodoState, addTodo } = useContext(TodoContext);

  const handleTodoStateChange = (todoId) => {
    updateTodoState(todoId);
  };

  return (
    <div>
      <h1 className='title'>Todo List</h1>
      <Timer />
      <div className='footerComponent'>
        <a className='footerLink' href='https://github.com/ahsatal-pierre/todo-app-Fullstack' rel="noopener" target="_blank">Link to the fullStack repository</a>
      </div>
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
