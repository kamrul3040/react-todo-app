import React,{useState} from 'react'
import Form from './Form';
import Label from './Label';
import TextInput from './TextInput';
import Button from './Button';
import { getDatabase, ref, set } from "firebase/database";
import { useAuth } from './../contexts/AuthContext';

export default function InputForms({addTodo}) {
  const [value , setValue] = useState("");
  const {currentUser} = useAuth();

  const handleSubmit = (e) =>{
    e.preventDefault();
    addTodo(value);


    setValue("")
  
  }
  const writeUserData =async(value)=>{
    
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `Tssks/${uid}`);

    await set(resultRef, {
      value: value
    });

  }
  console.log(value);
  return (
    <section style={{height: "0"}}>
        <Form  onSubmit={handleSubmit} mathod='POST'>
        <Label id={"name"}>Name:</Label>
        <TextInput value={value} type="text" name="task" placeholder="Enter Your Task"  onChange={(e) => setValue(e.target.value)}/>
        <Button type="submit" onClick={writeUserData}>Add Task</Button>   
        </Form>        
    </section>
  )
}
