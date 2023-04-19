import "firebase/database";
import { getDatabase, off, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import classes from "../style/Output.module.css"
import EditTask from "./EiditTask";
import Task from "./Task";

export default function OutputForms({
  todos,
  toggleCompleted,
  deletTodo,
  eiditTodo,
  eiditTask,
  taskAdd
}) {
  const { currentUser } = useAuth();
  const { uid } = currentUser || {};

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    taskAdd(data);
  },[data,taskAdd])

  useEffect(() => {
    // Set up Firebase listener when component mounts
    if (uid !== null) {
      setLoading(true);
      async function fetchDta() {
        const databaseRef = ref(getDatabase(), "Tasks/" + uid);
        await onValue(databaseRef, (snapshot) => {
          // Get data from snapshot
          console.log(snapshot.val());
          const newData = snapshot.val();
          // Update component state with new data
          setData(newData);
        });

        // Clean up Firebase listener when component unmounts
        return () => {
          off(databaseRef);
        };
      }
      setLoading(false);
      fetchDta();
    }
    
  }, [uid]);

  return (
      <section className={classes.outputForm}>
        {" "}
        {loading && <div>loading..........</div>}
        {currentUser ? data?.map((task, idx) => {
          const { id, task: showTask, isEiditing } = task || {};
          return (
            <div>
              {!isEiditing ? (
                <Task
                  key={id}
                  id={id}
                  eiditTodo={eiditTodo}
                  toggleCompleted={toggleCompleted}
                  task={showTask}
                  number={idx + 1}
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
        }):
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
      )
    
        }
        
      </section>
  );
}
