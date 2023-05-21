import React from 'react';

const TodoList = () => {
  const todos = [
    { id: 1, title: 'User story 1', state: 'pending' },
    { id: 2, title: 'User story 2', state: 'completed' },
    { id: 3, title: 'User story 3', state: 'pending' },
  ];

  return (
    <div>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.state}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
