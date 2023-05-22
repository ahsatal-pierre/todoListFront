import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TodoDetail from '../components/TodoDetail';

describe('TodoDetail', () => {
 it('renders the title and description from location state', () => {
 const mockState = { title: 'Test Todo', description: 'Test Description' };

 render(
 <MemoryRouter initialEntries={[{ pathname: '/todo/1', state: mockState }]}>
 <TodoDetail />
 </MemoryRouter>
 );

 expect(screen.getByText(/Test Todo Detail/i)).toBeInTheDocument();
 expect(screen.getByText(/Test Description/i)).toBeInTheDocument();
 });
});
