import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TodoProvider } from './components/TodoContext';
import TodoList from './components/TodoList';
import TodoDetail from './components/TodoDetail';

const App = () => {

  return (
   <div>
   
      <TodoProvider>
        <Routes>
          <Route exact path="/" element={<TodoList />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
      </TodoProvider>
     
      </div>
  );
};


export default App;