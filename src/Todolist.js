import React, { useContext, useRef, useCallback } from 'react';
import { TodoContext } from './TodoContext';

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const inputRef = useRef();

  const addTodo = useCallback(() => {
    const text = inputRef.current.value;
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      inputRef.current.value = '';
    }
  }, [dispatch]);

  const toggleTodo = useCallback(
    (index) => {
      dispatch({ type: 'TOGGLE_TODO', payload: index });
    },
    [dispatch]
  );

  const removeTodo = useCallback(
    (index) => {
      dispatch({ type: 'REMOVE_TODO', payload: index });
    },
    [dispatch]
  );

  return (
    <div className='main-div'>
      <h1>Todo List</h1><br></br>
      <input ref={inputRef} type="text" placeholder="Add a todo" />
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span onClick={() => toggleTodo(index)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button className='btn2' onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
