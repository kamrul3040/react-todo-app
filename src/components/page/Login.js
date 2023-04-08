import React from 'react'
import LoginForm from '../LoginForm'
import classes from '../../style/Login.module.css'

export default function Login() {
  return (
    <div className={classes.loginFormWraper }>
            <h1>Login Form</h1>
            <LoginForm />
            
    </div>
  )
}
