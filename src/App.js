
// from react
import React, { useState } from 'react';
// create button component

// custom hooks
import { useLocalStorage } from './useLocalStorage'

import './App.css';


function App() {

  const [val, setVal] = useState('') // val is the value of the input
  const [storedValue, setValue] = useLocalStorage('todos', [])
  const [todos, setTodos] = useState(storedValue || [])

  //functions
  const addToTodos = () => {
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
        <button onClick={() => {addToTodos()}}>add todo</button>
      </div>

      <ul className="todo-list">
        {/* list of todos - each one with checkbox title and delete btn */}
        {todos.map((todo,index) => (
          <li className="todo" key={`todo-${index}`}>
            <input type="checkbox" />
            <h3>{todo}</h3>
            <button onClick={()=>{deleteTodo(todo)}}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
