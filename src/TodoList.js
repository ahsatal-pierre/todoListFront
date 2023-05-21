
import React, { useState } from 'react';

const TodoList = () => {
const [todos, setTodos] = useState([
    { id: 1, title: 'User job 1', state: 'pending' },
    { id: 2, title: 'User job 2', state: 'pending' },
    { id: 3, title: 'User job 3', state: 'pending' },
    { id: 4, title: 'User job 4', state: 'pending' },
  ]);

  // Change the state
  const handleTodoStateChange = (todoId) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            state: todo.state === 'pending' ? 'completed' : 'pending',
          };
        }
        return todo;
      });

      //Separate todos by states
      const completedTodos = updatedTodos.filter(
        (todo) => todo.state === 'completed'
      );
      const pendingTodos = updatedTodos.filter(
        (todo) => todo.state === 'pending'
      );

      // Sort by state and by id 
      const sortedPendingTodos = [...pendingTodos].sort((a, b) => a.id - b.id);
      const sortedCompletedTodos = [...completedTodos].sort((a, b) => a.id - b.id);

      return [...sortedPendingTodos, ...sortedCompletedTodos];
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
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
            {todo.title}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
