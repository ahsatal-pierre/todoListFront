import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TodoContext } from './TodoContext';
import TodoList from './TodoList';

describe('TodoList', () => {
 it('renders a list of todos', () => {
 const mockTodos = [
 { id: 1, title: 'Test Todo 1', state: 'pending', description: 'Test Description 1' },
 { id: 2, title: 'Test Todo 2', state: 'completed', description: 'Test Description 2' },
 ];

 render(
 <MemoryRouter>
 <TodoContext.Provider value={{ todos: mockTodos }}>
 <TodoList />
 </TodoContext.Provider>
 </MemoryRouter>
 );

 expect(screen.getByText(/Test Todo 1/i)).toBeInTheDocument();
 expect(screen.getByText(/Test Todo 2/i)).toBeInTheDocument();
 });
});
