import React from 'react'
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import Label from './Label';
import Info from './Info';
import Button from './Button';
import Form from './Form';
import classes from '../style/LoginForm.module.css'


export default function LoginForm() {
  return (
    <Form className={classes.loginForm}>
         <Label for="email" >Email:</Label>
         <TextInput type="email" name="email" id="email" placeholder="Enter Your Email" />
         <Label for="password" >Password:</Label>
         <TextInput type="password" name="pasword" id="pasword" placeholder="Enter Your Password" />
         <Button type="submit">Submit</Button>
         <Info>
         Don't have an account? <Link to={"/signup"}>Signup</Link> instead.
         </Info>
    </Form>
      
  )
}
