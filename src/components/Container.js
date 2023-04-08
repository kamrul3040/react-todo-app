import React, { useState } from 'react'
import InputForms from './InputForms';
import OutputForms from './OutputForms';
import classes from '../style/Container.module.css';
import {v4 as uuidv4} from 'uuid';

uuidv4();

export default function Container() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) =>{
    setTodos([...todos,{id:uuidv4(), task:todo, completed:false, isEditing:false}]);
  }
  console.log(todos);
  const toggleCompleted = (id) =>{
    setTodos( todos.map((todo) =>todo.id === id ? {...todo, completed: !todo.completed} : todo) );
  }
  const deletTodo = (id) =>{
    setTodos( todos.filter((todo) =>todo.id !== id) );
  }

  return (
    <div className={classes.container}>

            <h1>My Task List</h1>
            <InputForms addTodo={addTodo}/>
            <OutputForms todos={todos} toggleCompleted={toggleCompleted} deletTodo={deletTodo}/>
        </div>
  )
}
