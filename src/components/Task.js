import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Task({
  task,
  number,
  completed,
  id,
  toggleCompleted,
  deletTodo,
  eiditTodo,
}) {
  console.log(eiditTodo);
  return (
    <div className="outputTasks">
      <div className="taskNumber">{number}</div>
      <p
        onClick={(e) => toggleCompleted(id)}
        className={`${completed ? "completed" : "hi"}`}
      >
        {task}
      </p>
      <div onClick={() => eiditTodo(id)}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
      <div onClick={() => deletTodo(id)}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}
