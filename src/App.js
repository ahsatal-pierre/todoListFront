import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TodoProvider } from './TodoContext';
import TodoList from './TodoList';
import TodoDetail from './TodoDetail';

const App = () => {
  return (
    <Router>
      <TodoProvider>
        <Routes>
          <Route exact path="/" element={<TodoList />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
      </TodoProvider>
    </Router>
  );
};


export default App;