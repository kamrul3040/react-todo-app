import { getDatabase, ref, set,child,get } from "firebase/database";
import React, { useState } from "react";
import { useAuth } from "./../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import Label from "./Label";
import TextInput from "./TextInput";

export default function InputForms({ addTodo, todos }) {
  const [value, setValue] = useState("");
  const { currentUser } = useAuth();
  const lastTodo = todos.slice(-1)[0]
  const { uid } = currentUser||{};
  // console.log(lastTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);

    setValue("");
  };
  console.log(todos);

  if (todos.length > 0 && currentUser) {
    const writeUserData = async () => {
      const db = getDatabase();
      const resultRef = ref(db, `Tasks/${uid}/`);

      const dbRef = ref(getDatabase());
      get(child(dbRef, `Tasks/${uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            set(resultRef, [...snapshot.val(), lastTodo]);
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

  // console.log(value);
  return (
    <section style={{ height: "0" }}>
      <Form onSubmit={handleSubmit} mathod="POST">
        <Label id={"name"}>Name:</Label>
        <TextInput
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