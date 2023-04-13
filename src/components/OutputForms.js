import React, { useEffect, useState } from 'react'
import Task from './Task';
import useData from '../hooks/useData';
import {EiditTask} from './EiditTask'
import classes from '../style/Output.module.css';
import { useAuth } from '../contexts/AuthContext';
export default function OutputForms({todos, toggleCompleted,deletTodo,eiditTodo,eiditTask,}) {
  const [todost,setTodost] = useState();
const {loading,error,tasks} = useData();
const {currentUser} = useAuth()

// Rerender the tasks
async function renderTask(tasks){
 const  response = await fetch(tasks);
  const data = await response.json();
  setTodost(data);
  loading (false);
 

}
 console.log(tasks[0]);
useEffect(() => {
  renderTask(tasks);
},[renderTask])



console.log(todost);
  return (
      <section className={classes.outputForm}>
         {currentUser ?(
          tasks.length > 0?(
            tasks.map((task,index)=>(
              task.isEiditing? (<EiditTask  key={task.id} id={task.id}eiditTask={eiditTask} task={task.task}number={index + 1}/>):(
                <Task task={task.task} number={index + 1} key={task.id} id={task.id} completed={task.completed} toggleCompleted={toggleCompleted}deletTodo={deletTodo}eiditTodo={eiditTodo}/>
              )))
           ):(console.log(tasks))
         ):(
            todos.map((todo,index)=>(
              todo.isEiditing? (<EiditTask  key={todo.id} id={todo.id}eiditTask={eiditTask} task={todo.task}number={index + 1}/>):(
                <Task task={todo.task} number={index + 1} key={todo.id} id={todo.id} completed={todo.completed} toggleCompleted={toggleCompleted}deletTodo={deletTodo}eiditTodo={eiditTodo}/>
              )))
         )}
      </section>
       
  )
}
