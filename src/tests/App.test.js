import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
 it('renders the TodoList component on the root path', () => {
 render(
 <MemoryRouter initialEntries={['/']}>
 <App />
 </MemoryRouter>
 );

 expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
 });

 it('renders the TodoDetail component on the /todo/:id path', () => {
 const mockState = { title: 'Test Todo', description: 'Test Description' };

 render(
 <MemoryRouter initialEntries={[{ pathname: '/todo/1', state: mockState }]}>
 <App />
 </MemoryRouter>
 );

 expect(screen.getByText(/Test Todo Detail/i)).toBeInTheDocument();
 expect(screen.getByText(/Test Description/i)).toBeInTheDocument();
 });
});
