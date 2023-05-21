import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'User job 1', state: 'pending', description: 'description job 1' },
    { id: 2, title: 'User job 2', state: 'pending', description: 'description job 2' },
    { id: 3, title: 'User job 3', state: 'pending', description: 'description job 3' },
    { id: 4, title: 'User job 4', state: 'pending', description: 'description job 4' },
  ]);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const updateTodoState = (todoId) => {
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

      const sortedTodos = [...updatedTodos].sort((a, b) => {
        if (a.state === 'completed' && b.state !== 'completed') {
          return 1;
        } else if (a.state !== 'completed' && b.state === 'completed') {
          return -1;
        } else {
          return a.id - b.id;
        }
      });

      return sortedTodos;
    });
  };


  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodoState }}>
      {children}
    </TodoContext.Provider>
  );
};