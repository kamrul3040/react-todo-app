import { useAuth } from "../contexts/AuthContext";
import useData from "../hooks/useData";
import {EiditTask} from "./EiditTask"
import Task from "./Task";
import TextInput from "./TextInput";
export default function OutputForms({
  todos,
  toggleCompleted,
  deletTodo,
  eiditTodo,
  eiditTask,
}) {
  const { loading, error, tasks } = useData();
  const { currentUser } = useAuth();

  console.log(tasks);

  // Rerender the tasks
  // const RenderTask = (tasks) => {
  //   <section className={classes.outputForm}>
  //     {currentUser
  //       ? tasks.length > 0
  //         ? tasks.map(
  //             (task, index) => (
  //               // console.log(task.isEiditing),
  //               task.isEiditing
  //                 ? ((
  //                     <EiditTask
  //                       key={task?.id}
  //                       id={task?.id}
  //                       eiditTask={eiditTask}
  //                       task={task?.task}
  //                       number={index + 1}
  //                     />
  //                   )
  //                   // console.log("Eiditing  calld"))
  //                 : (
  //                     <Task
  //                       task={task}
  //                       number={index + 1}
  //                       key={task.id}
  //                       id={task.id}
  //                       completed={task.completed}
  //                       toggleCompleted={toggleCompleted}
  //                       deletTodo={deletTodo}
  //                       eiditTodo={eiditTodo}
  //                     />
  //                   )
  //             )
  //         : console.log(tasks)
  //       : todos.map((todo, index) =>
  //           todo.isEiditing ? (
  //             <EiditTask
  //               key={todo.id}
  //               id={todo.id}
  //               eiditTask={eiditTask}
  //               task={todo.task}
  //               number={index + 1}
  //             />
  //           ) : (
  //             <Task
  //               task={todo.task}
  //               number={index + 1}
  //               key={todo.id}
  //               id={todo.id}
  //               completed={todo.completed}
  //               toggleCompleted={toggleCompleted}
  //               deletTodo={deletTodo}
  //               eiditTodo={eiditTodo}
  //             />
  //           )
  //         )}
  //   </section>;
  // };
  // useEffect(() => {
  //   RenderTask(tasks);
  // }, [tasks]);

  // return <RenderTask />;

  return (
    <div>
      <div>
        {" "}
        {!currentUser && (
            todos?.map((task, idx) => {
              const { id, task: showTask, isEiditing } = task || {};
              console.log(isEiditing);
              return (
                <div>
                  {!isEiditing ? (
                    <Task
                      key={id}
                      id={id}
                      eiditTodo={eiditTodo}
                      task={showTask}
                      number={idx + 1}
                      toggleCompleted={toggleCompleted}
                      deletTodo={deletTodo}
                    />
                  ) : (
                    console.log("eidit called"),
                    <EiditTask
                      key={id}
                      id={task.id}
                      eiditTask={eiditTask}
                      task={showTask}
                      number={idx + 1}
                    />
                  )}
                </div>
              );
            })
            )}
        {loading && <div>loading..........</div>}
        {!loading &&
          !error &&
          tasks?.map((task, idx) => {
            const { id, task: showTask, isEiditing } = task || {};
            console.log(isEiditing);
            return (
              <div>
                {!isEiditing ? (
                  <Task
                    key={id}
                    id={id}
                    eiditTodo={eiditTodo}
                    task={showTask}
                    number={idx + 1}
                    toggleCompleted={toggleCompleted}
                    deletTodo={deletTodo}
                  />
                ) : (
                  console.log("eidit called"),
                  <EiditTask
                    key={id}
                    id={task.id}
                    eiditTask={eiditTask}
                    task={showTask}
                    number={idx + 1}
                  />
                )}
              </div>
            );
          })}
          
      </div>
    </div>
  );
}