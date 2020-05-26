import React from 'react';
import TodoList from './components/TodoList'
import AddNewTodo from './components/AddNewTodo'
import { GlobalProvider } from './context/GlobalState'
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
      <AddNewTodo />
      <TodoList />
      </div>
    </GlobalProvider>
  );
}

export default App;
