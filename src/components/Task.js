import React from "react";
import "../stylesheets/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai"

function Task({id,text,isDone,doneTask,unDoneTask,deleteTask}){
  
  const handleState = () => {
    if(isDone === false){
      doneTask(id);
      isDone=true;
    }
    else{
      unDoneTask(id);
      isDone=false;
    }
  }

  return(
    <div className={isDone ? "container-task done-task" : "container-task"}
    onClick={handleState}>
      <div className="text-task">
        {text}
      </div>
      <div className="container-icon-task">
        <AiOutlineCloseCircle size={22} onClick={(e) => {
          e.stopPropagation(); // Stops event propagation
          deleteTask(id);
        }}/>
      </div>
    </div>
  );
}

export default Task;