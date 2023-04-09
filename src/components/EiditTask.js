import React,{useState} from 'react'
import Form from './Form';
import TextInput from './TextInput';
import Button from './Button';


export const  EiditTask= ({eiditTask, id,task,number}) => {
  const [value , setValue] = useState(task);

  const handleSubmit = (e) =>{
    e.preventDefault();
    eiditTask(value,id);


    setValue("")
  
  }
  console.log(id);
  return (
        <Form  onSubmit={handleSubmit}>
            {/* <section className="outputTask">
            <div className="taskNumber">{number}</div>
            <TextInput value={value} type="text" name="task" placeholder="Update Task"  onChange={(e) => setValue(e.target.value)}/>
            <Button type="submit">Update</Button>   
            </section> */}
            <div className="outputTasks">
                <div className="taskNumber">{number}</div>
                <TextInput value={value} type="text" name="task" placeholder="Update Task"  onChange={(e) => setValue(e.target.value)}/>
                <Button >Update</Button>  
            </div>

        </Form>
  )
}
