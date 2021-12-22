import React, { useState, useRef, useEffect } from "react";
import Todos from './Todos';
import {v4 as uuidv4} from 'uuid';

const LOCALSTORAGEKEY = 'todoApp.todoList'

function App() {
  const [todoList, setTodos] = useState([])
  const todoNameRef = useRef();

  useEffect(()=> {
    const storedtodos = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY))
    if(storedtodos) setTodos(storedtodos)
  }, [])

  useEffect(()=> {
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(todoList))
  }, [todoList])

  function toggleTodo(id){
    const newtodos = [...todoList]
    const todo = newtodos.find(todo=> todo.id ==id)
    todo.Status = !todo.Status;
    setTodos(newtodos)
  }

  function handleAddTask(e){
      const name = todoNameRef.current.value
      if (name === '') return 
      setTodos(prevTodos => {
        return [...prevTodos,{id: uuidv4(), Name:name, Status: false}]
      })
      todoNameRef.current.value = null;
  }

  return (
      <div>
        <Todos todos={todoList} toggleTodo={toggleTodo}/>
        <input ref={todoNameRef} type="text"/>
        <button onClick={handleAddTask} >Add Task</button>
      </div>
  );
   
}

export default App;
