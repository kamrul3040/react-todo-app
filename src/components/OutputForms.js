import React, { useEffect } from 'react'
import Task from './Task';
import useData from '../hooks/useData';
import {EiditTask} from './EiditTask'
import classes from '../style/Output.module.css';
export default function OutputForms({todos, toggleCompleted,deletTodo,eiditTodo,eiditTask,}) {
const {loading,error,tasks} = useData();
 console.log(tasks[0]);
//  useEffect((tasks) => {

//  },[tasks])

  return (
      <section className={classes.outputForm}>
         {tasks.length > 0?(
          tasks.map((task,index)=>(
            task.isEiditing? (<EiditTask  key={task.id} id={task.id}eiditTask={eiditTask} task={task.task}number={index + 1}/>):(
              <Task task={task.task} number={index + 1} key={task.id} id={task.id} completed={task.completed} toggleCompleted={toggleCompleted}deletTodo={deletTodo}eiditTodo={eiditTodo}/>
            )))
         ):(console.log(tasks))}
       </section>
       
  )
}
