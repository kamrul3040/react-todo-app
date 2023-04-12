import { getDatabase, ref, set } from "firebase/database";
import React, { useState } from "react";
import { useAuth } from "./../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import Label from "./Label";
import TextInput from "./TextInput";

export default function InputForms({ addTodo, todos }) {
  const [value, setValue] = useState("");
  const { currentUser } = useAuth();
  const { uid } = currentUser||{};
  console.log(uid);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);

    setValue("");
  };
  console.log(todos);

  if (todos.length > 0) {
    const writeUserData = async () => {
      const db = getDatabase();
      const resultRef = ref(db, `Tasks/${uid}`);

      await set(resultRef, todos)
        .then(() => {
          console.log("todo added");
        })
        .catch((error) => {
          console.log(error);
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