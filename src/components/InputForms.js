import React,{useState} from 'react'
import Form from './Form';
import Label from './Label';
import TextInput from './TextInput';
import Button from './Button';


export default function InputForms({addTodo}) {
  const [value , setValue] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();
    addTodo(value);


    setValue("")
  
  }
  return (
    <section style={{height: "0"}}>
        <Form  onSubmit={handleSubmit}>
        <Label id={"name"}>Name:</Label>
        <TextInput value={value} type="text" name="task" placeholder="Enter Your Task"  onChange={(e) => setValue(e.target.value)}/>
        <Button type="submit" >Add Task</Button>   
        </Form>        
    </section>
  )
}
