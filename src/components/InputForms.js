import { child, get, getDatabase, ref, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useAuth } from "./../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import Label from "./Label";
import TextInput from "./TextInput";

export default function InputForms({ addTodo, todos, setTodo }) {
  const [value, setValue] = useState("");
  const { currentUser } = useAuth();
  const lastTodo = todos.slice(-1)[0];
  const { uid } = currentUser || {};

  const handleSubmit = (e) => {
    if (value !== "") {
      addTodo(value);

      setValue("");
    }
    e.preventDefault();
  };
  useEffect(() => {
    if (todos !== "" && todos.length > 0 && currentUser) {
      const writeUserData = async () => {
        const db = getDatabase();
        const resultRef = ref(db, `Tasks/${uid}/`);

        const dbRef = ref(getDatabase());
        get(child(dbRef, `Tasks/${uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              set(resultRef, [...snapshot.val(), lastTodo]).then(() => {
                setTodo("");
              });

              console.log("data added successfully");
            } else {
              set(resultRef, [lastTodo]);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };

      writeUserData();
    }
  }, [todos, currentUser, uid, lastTodo, setTodo]);

  // console.log(value);
  return (
    <section style={{ height: "0" }}>
      <Form onSubmit={handleSubmit} mathod="POST">
        <Label id={"name"}>Name:</Label>
        <TextInput
          required
          value={value}
          type="text"
          name="task"
          placeholder="Enter Your Task"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          type="submit"
          // onClick={() => {
          //   writeUserData();
          // }}
        >
          Add Task
        </Button>
      </Form>
    </section>
  );
}

// my code here
// import { child, get, getDatabase, ref, set } from "firebase/database";
// import React, { useState } from "react";
// import { useAuth } from "./../contexts/AuthContext";
// import Button from "./Button";
// import Form from "./Form";
// import Label from "./Label";
// import TextInput from "./TextInput";

// export default function InputForms({ addTodo, todos, setTodo }) {
//   const [value, setValue] = useState("");
//   const { currentUser } = useAuth();
//   const lastTodo = todos.slice(-1)[0];
//   const { uid } = currentUser || {};

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addTodo(value);

//     setValue("");
//   };

//   if (todos !== "" && todos.length > 0 && currentUser) {
//     const writeUserData = async () => {
//       const db = getDatabase();
//       const resultRef = ref(db, `Tasks/${uid}/`);

//       const dbRef = ref(getDatabase());
//       get(child(dbRef, `Tasks/${uid}`))
//         .then((snapshot) => {
//           if (snapshot.exists()) {
//             set(resultRef, [...snapshot.val(), lastTodo]).then(() => {
//               setTodo("");
//             });
//           } else {
//             set(resultRef, [lastTodo]);
//           }
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     };

//     writeUserData();
//   }

//   // console.log(value);
//   return (
//     <section style={{ height: "0" }}>
//       <Form onSubmit={handleSubmit} mathod="POST">
//         <Label id={"name"}>Name:</Label>
//         <TextInput
//           value={value}
//           type="text"
//           name="task"
//           placeholder="Enter Your Task"
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <Button
//           type="submit"
//           // onClick={() => {
//           //   writeUserData();
//           // }}
//         >
//           Add Task
//         </Button>
//       </Form>
//     </section>
//   );
// }
