/* eslint-disable testing-library/prefer-screen-queries */
import '@testing-library/jest-dom';

import React, { useContext } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { TodoContext, TodoProvider } from '../components/TodoContext';

const TestComponent = () => {
 const { todos, addTodo } = useContext(TodoContext);

 return (
 <div>
 <button onClick={() => addTodo({ title: 'Test Todo', state: 'pending', description: 'Test Description' })}>
 Add Todo
 </button>
 <ul>
 {todos.map((todo) => (
 <li key={todo.id}>{todo.title}</li>
 ))}
 </ul>
 </div>
 );
};

describe('TodoContext', () => {
 it('provides a list of todos and methods to add and update todos', async () => {
 const { getByText, getAllByRole } = render(
 <TodoProvider>
 <TestComponent />
 </TodoProvider>
 );

 expect(getAllByRole('listitem')).toHaveLength(4);

 act(() => {
    getByText(/Add Todo/i).click();
  });

 await waitFor(() => expect(getAllByRole('listitem')).toHaveLength(5));
 expect(getByText(/Test Todo/i)).toBeInTheDocument();
 });
});
