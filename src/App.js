import React from 'react';
import { TodoProvider } from './TodoContext';
import TodoList from './Todolist';

const App = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};

export default App;
