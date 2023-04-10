import React from 'react'
import Task from './Task';
import {EiditTask} from './EiditTask'
import classes from '../style/Output.module.css'
export default function OutputForms({todos, toggleCompleted,deletTodo,eiditTodo,eiditTask,number}) {
   
  return (
      <section className={classes.outputForm}>
         {todos.map((todo,index)=>(
          
          todo.isEiditing? (<EiditTask  key={todo.id} id={todo.id}eiditTask={eiditTask} task={todo.task}number={index + 1}/>):(
            <Task task={todo.task} number={index + 1} key={todo.id} id={todo.id} completed={todo.completed} toggleCompleted={toggleCompleted}deletTodo={deletTodo}eiditTodo={eiditTodo}/>
          )))}
       </section>
       
  )
}
