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
    const newTodoWithId = {
      id: todos.length + 1,
      ...newTodo,
    };

    setTodos((prevTodos) => [newTodoWithId, ...prevTodos ]);
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
        if (a.state === 'pending' && b.state === 'pending') {
          if (a.id > 4 && b.id > 4) {
            return b.id - a.id; 
          } else if (a.id <= 4 && b.id <= 4) {
            return a.id - b.id; 
          } else if (a.id > 4 && b.id <= 4) {
            return -1; 
          } else {
            return 1; 
          }
        } else {
          return a.state === 'pending' ? -1 : 1; 
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
