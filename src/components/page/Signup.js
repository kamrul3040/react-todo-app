import React from "react";
import classes from "../../style/Signup.module.css";
import SignupForm from "../SignupForm";

export default function Signup() {
  return (
    <div className={classes.signupFormWraper}>
      <h1>Signup Form</h1>
      <SignupForm />
    </div>
  );
}
