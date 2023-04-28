import "firebase/database";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import useData from "../hooks/useData";
import classes from "../style/Output.module.css";
import EditTask from "./EiditTask";
import Task from "./Task";
export default function OutputForms({
  todos,
  toggleCompleted,
  deletTodo,
  eiditTodo,
  eiditTask,
}) {
  const { data, loading } = useData();
  const { currentUser } = useAuth();
  console.log(data);
  return (
    <section className={classes.outputForm}>
      {" "}
      {loading && <div>loading..........</div>}
      {currentUser
        ? data?.map((task, idx) => {
            const { id, task: showTask, isEiditing } = task || {};
            return (
              <div>
                {!isEiditing ? (
                  <Task
                    key={id}
                    id={id}
                    eiditTodo={eiditTodo}
                    toggleCompleted={toggleCompleted}
                    deletTodo={deletTodo}
                    task={showTask}
                    number={idx + 1}
                    completed={task.completed}
                  />
                ) : (
                  <EditTask
                    key={id}
                    id={task.id}
                    eiditTask={eiditTask}
                    task={showTask}
                    number={1}
                  />
                )}
              </div>
            );
          })
        : todos !== "" &&
          todos?.map((todo, index) =>
            todo.isEiditing ? (
              <EditTask
                key={todo.id}
                id={todo.id}
                eiditTask={eiditTask}
                task={todo.task}
                number={index + 1}
              />
            ) : (
              <Task
                task={todo.task}
                number={index + 1}
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                toggleCompleted={toggleCompleted}
                deletTodo={deletTodo}
                eiditTodo={eiditTodo}
              />
            )
          )}
    </section>
  );
}
