import React from 'react';
import TodoList from './TodoList';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>ToDo List</p>
      </header>
      <div className="TodoList">
      <TodoList />
    </div>
    </div>
  );
}

export default App;
