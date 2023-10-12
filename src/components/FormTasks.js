import react, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import "../stylesheets/FormTasks.css";

function FormTasks(props){
const [inputText,setInputText]=useState("")

  const handleSubmitText = e => {
    setInputText(e.target.value);
  }

  const createTask = e => {
    e.preventDefault(); //Prevent reload the page
    document.getElementById("task-name").value = "";

    const newTask = {
      id:uuidv4(),
      text:inputText,
      isDone:false
    }

    props.addTask(newTask);
  }

  return(
    <form
    onSubmit={createTask}>

      <input
        id="task-name"
        type="text"
        name="task-name"
        placeholder="Task Name" 
        required
        onChange={handleSubmitText}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default FormTasks;