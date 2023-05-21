import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './TodoList';
import TodoDetail from './TodoDetail';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;