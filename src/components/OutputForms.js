import React, { useEffect, useState } from 'react'
import Task from './Task';
import useData from '../hooks/useData';
import {EiditTask} from './EiditTask'
import classes from '../style/Output.module.css';
export default function OutputForms({ toggleCompleted,deletTodo,eiditTodo,eiditTask,}) {
  const [todos,setTodos] = useState();
const {loading,error,tasks} = useData();
//  console.log(tasks[0]);
 useEffect(() => {
return setTodos(tasks)
 },[tasks])
 console.log(todos);

  return (
      <section className={classes.outputForm}>
         {tasks.length > 0?(
          todos.map((todo,index)=>(
            todo.isEiditing? (<EiditTask  key={todo.id} id={todo.id}eiditTask={eiditTask} task={todo.task}number={index + 1}/>):(
              <Task task={todo.task} number={index + 1} key={todo.id} id={todo.id} completed={todo.completed} toggleCompleted={toggleCompleted}deletTodo={deletTodo}eiditTodo={eiditTodo}/>
            )))
         ):(console.log(tasks))}
       </section>
       
  )
}
