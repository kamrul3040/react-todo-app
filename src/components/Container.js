import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "../style/Container.module.css";
import InputForms from "./InputForms";
import OutputForms from "./OutputForms";

uuidv4();

export default function Container() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEiditing: false },
    ]);
  };

  // console.log(todos);
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deletTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const eiditTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEiditing: !todo.isEiditing } : todo
      )
    );
  };
  
  const eiditTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEiditing: !todo.isEiditing } : todo
      )
    );
  };
  // const {todo} = addTodo;
  // const {id, todo, completed, isEiditing} = todos;

  return (
    <div className={classes.container}>
      <h1>My Task List</h1>
      <InputForms addTodo={addTodo} todos={todos} uiId={uuidv4()} />
      <OutputForms
        todos={todos}
        toggleCompleted={toggleCompleted}
        deletTodo={deletTodo}
        eiditTodo={eiditTodo}
        eiditTask={eiditTask}
      />
    </div>
  );
}