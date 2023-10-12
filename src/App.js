import react, {useState, useEffect} from "react";
import FormTasks from "./components/FormTasks.js";
import './App.css';
import Task from "./components/Task.js";

function App() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];  //Get the data stored in localStorage, if it is null define it as a empty array

  const [tasksList,setTasksList]=useState(storedTasks) //Initialize useState with localStorage

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasksList))  //Store tasksList on localStorage
  }, [tasksList])

  const addTask = (task) => {
    task.text = task.text.trim(); //Remove unnecessary spaces at the beginning and end of a string
    if(task.text != ""){ 
      const updatedTasks = [task,...tasksList]; //Add at the beginning of the array the new task and then the rest of the array (tasksList) 
      setTasksList(updatedTasks);
      console.log(task);
    }
  }

  const doneTask = (id) => {
    const updatedTasks = tasksList.map(task => {
      if(task.id === id){
        task.isDone = true;
      }
      return task;
    });

    setTasksList([...updatedTasks]);
  }

  const unDoneTask = (id) => {
    const updatedTasks = tasksList.map(task => {
      if(task.id === id){
        task.isDone = false;
      }
      return task;
    });
    
    setTasksList([...updatedTasks]);
  }

  const deleteTask = (id) => {
    const updatedTasks = tasksList.filter(task => task.id !== id);
    setTasksList(updatedTasks);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Tasks List</h1>

        <FormTasks
          addTask={addTask}
        />
      
        <div className="container-tasks">
            {
              tasksList.map((task) =>
                <Task
                  key={task.id}
                  id={task.id}
                  text={task.text}
                  isDone={task.isDone}
                  doneTask={doneTask}
                  unDoneTask={unDoneTask}
                  deleteTask={deleteTask}
                />
              )
            }
        </div>
      </div>
      
    </div>
  );
}

export default App;


