import React from 'react'
import Task from './Task';
import classes from '../style/Output.module.css'
export default function OutputForms({todos, toggleCompleted,deletTodo}) {
  
  return (
      <section className={classes.outputForm}>
         {todos.map((todo,index)=>(<Task task={todo.task} number={index + 1} key={todo.id} id={todo.id} completed={todo.completed} toggleCompleted={toggleCompleted}deletTodo={deletTodo}/>))}
         
       </section>
  )
}
