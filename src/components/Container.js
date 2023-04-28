import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "../style/Container.module.css";
import InputForms from "./InputForms";
import OutputForms from "./OutputForms";
// import "firebase/database";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { useAuth } from "../contexts/AuthContext";

uuidv4();

export default function Container() {
  const [todos, setTodos] = useState("");
  const { currentUser } = useAuth();
  const { uid } = currentUser || {};
  const db = getDatabase();
  console.log(uid);

  // A post entry.
  // const postData = {
  //   updatedData:updatedData,
  // };

  // // Get a key for a new Post.
  // const newPostKey = push(child(ref(db), 'Tasks'+ uid)).key;

  // // Write the new post's data simultaneously in the posts list and the user's post list.
  // const updates = {};
  // updates['/Tasks/' + newPostKey] = postData;
  // updates[ uid + '/' + newPostKey] = postData;//----------------------------

  //----------------------------

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEiditing: false },
    ]);
  };
  async function toggleCompleted(id) {
    const dataRef = ref(db);
    const resultRef = ref(db, `Tasks/${uid}/`);
    // const dataQuery = query(dataRef, orderByKey());

    if (currentUser) {
      get(child(dataRef, "Tasks/" + uid))
        .then((snapshot) => {
          if (snapshot.exists()) {
            set(
              resultRef,
              snapshot
                .val()
                .map((task) =>
                  task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
                )
            );
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setTodos(
        todos.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    }
  }
  // const toggleCompleted = (id) => {
  //   setUpdatedData(
  //     data.map((task) =>

  //       task.id === id ? { ...task, completed: !task.completed } : task
  //     )
  //   );
  // };
  async function deletTodo(id) {
    const dataRef = ref(db);
    const resultRef = ref(db, `Tasks/${uid}/`);
    // const dataQuery = query(dataRef, orderByKey());

    if (currentUser) {
      get(child(dataRef, "Tasks/" + uid))
        .then((snapshot) => {
          if (snapshot.exists()) {
            set(
              resultRef,
              snapshot.val().filter((task) => task.id !== id)
            );
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  }

  async function eiditTodo(id) {
    const dataRef = ref(db);
    const resultRef = ref(db, `Tasks/${uid}/`);
    // const dataQuery = query(dataRef, orderByKey());

    if (currentUser) {
      get(child(dataRef, "Tasks/" + uid))
        .then((snapshot) => {
          if (snapshot.exists()) {
            set(
              resultRef,
              snapshot
                .val()
                .map((task) =>
                  task.id === id
                    ? { ...task, isEiditing: !task.completed }
                    : task
                )
            );
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isEiditing: !todo.isEiditing } : todo
        )
      );
    }
  }

  async function eiditTask(tasks, id) {
    const dataRef = ref(db);
    const resultRef = ref(db, `Tasks/${uid}/`);
    // const dataQuery = query(dataRef, orderByKey());

    if (currentUser) {
      get(child(dataRef, "Tasks/" + uid))
        .then((snapshot) => {
          if (snapshot.exists()) {
            set(
              resultRef,
              snapshot
                .val()
                .map(
                  (task) =>
                    task.id === id
                      ? { ...task, task: tasks, isEiditing: !task.isEiditing }
                      : task,
                  console.log(tasks)
                )
            );
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? { ...todo, task: tasks, isEiditing: !todo.isEiditing }
            : todo
        )
      );
    }
  }
  return (
    <div className={classes.container}>
      <h1>My Task List</h1>
      <InputForms
        addTodo={addTodo}
        todos={todos}
        uiId={uuidv4()}
        setTodo={setTodos}
      />
      <OutputForms
        todos={todos}
        toggleCompleted={toggleCompleted}
        deletTodo={deletTodo}
        eiditTodo={eiditTodo}
        eiditTask={eiditTask}
        // datas={data}
        // loading={loading}
      />
    </div>
  );
}

// my code here
// import React, { useState} from "react";
// import { v4 as uuidv4 } from "uuid";
// import classes from "../style/Container.module.css";
// import InputForms from "./InputForms";
// import OutputForms from "./OutputForms";
// import "firebase/database";
// import useData from "../hooks/useData";

// uuidv4();

// export default function Container() {
//   const [todos, setTodos] = useState("");
//   const [updatedData, setUpdatedData] = useState([]);
//   // const {data, } = useData();
//   const addTodo = (todo) => {
//     setTodos([
//       ...todos,
//       { id: uuidv4(), task: todo, completed: false, isEiditing: false },
//     ]);
//   };
//   const toggleCompleted = (id) => {
//     setTodos(
//       todos.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//     setUpdatedData(
//       todos.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };
//   const deletTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const eiditTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, isEiditing: !todo.isEiditing } : todo
//       )
//     );
//   };

//   const eiditTask = (task, id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, task, isEiditing: !todo.isEiditing } : todo
//       )
//     );
//   };
//   console.log(updatedData);
//   return (
//     <div className={classes.container}>
//       <h1>My Task List</h1>
//       <InputForms
//         addTodo={addTodo}
//         todos={todos}
//         uiId={uuidv4()}
//         setTodo={setTodos}
//       />
//       <OutputForms
//         todos={todos}
//         toggleCompleted={toggleCompleted}
//         deletTodo={deletTodo}
//         eiditTodo={eiditTodo}
//         eiditTask={eiditTask}
//         // updatedData={updatedData}
//         // datas={data}
//         // loading={loading}
//       />
//     </div>
//   );
// }
