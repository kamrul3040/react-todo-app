import React from 'react'
import SignupForm from '../SignupForm';
import classes from '../../style/Signup.module.css'

export default function Signup() {
  return (
    <div className={classes.signupFormWraper}>
            <h1>Signup Form</h1>
            <SignupForm/>
    </div>
  )
}
