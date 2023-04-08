import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

export default function Task({task,number,completed,id,toggleCompleted,deletTodo}) {
  // console.log(task);
  return (
        <div className="outputTasks">
            <div className="taskNumber">{number}</div>
            <p onClick={()=>toggleCompleted(id)} className={`${completed? "completed" :"hi"}`}>{task}</p>
            <div><FontAwesomeIcon icon={faPenToSquare} />
            </div>
            <div onClick={()=>deletTodo(id)}><FontAwesomeIcon icon={faTrash} /></div>
        </div>
  )
}
