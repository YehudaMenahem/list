
// from react
import React, { useState } from 'react';
// create button component

// custom hooks
import { useLocalStorage } from './useLocalStorage'

import './App.css';
import Button from './Button';


function App() {

  const [val, setVal] = useState('') // val is the value of the input
  const [storedValue, setValue] = useLocalStorage('todos', [])
  const [todos, setTodos] = useState(storedValue || [])

  //functions
  const addToTodos = () => {
    if(val === '') return
    setTodos([...todos, val])
    setValue([...todos, val])
    setVal('')
  }

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t !== todo)) // filter out the todo that matches the todo we want to delete
    setValue(todos.filter((t) => t !== todo))
  }

  return (
    <div className="App">
      <div className="container"> 
        <h1>Add Task</h1>
        <input 
          type="text" 
          placeholder="Add task" 
          value={val}
          onChange={(e) => setVal(e.target.value)}  
        />
        <Button label="Add Todo" click={() => {addToTodos()}} />
      </div>

      <ul className="todo-list">
        {/* list of todos - each one with checkbox title and delete btn */}
        {todos.map((todo,index) => (
          <li className="todo" key={`todo-${index}`}>
            <input type="checkbox" />
            <h3>{todo}</h3>
            <Button label="Delete" click={() => {deleteTodo(todo)}} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
