import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from './TextInput'
import Label from './Label';
import Info from './Info';
import Button from './Button';
import Form from './Form';
import classes from '../style/SgnupForm.module.css'

export default function SignupForm() {
  
  return ( 
    <Form className={classes.signupForm}>
      
      <Label for="name">Name:</Label>
      <TextInput type="text" name="name" id="name" placeholder="Enter Your Name"/>
      <Label for="email">Email:</Label>
      <TextInput type="email" name="email" id="email" placeholder="Enter Your Email"/>
      <Label for="password">Password:</Label>
      <TextInput type="password" name="emapasswordil" id="password" placeholder="Enter Your Password"/>
      <Label for="correct-password">Correct Password:</Label>
      <TextInput type="password" name="correct-password" id="correct-password" placeholder="Enter Your Correct Password" />
      <Button type="submit">Submit</Button>
      <Info>Don you have an account? <Link to={"/login"}>Login</Link> instead.</Info>
    </Form>
  )
}
