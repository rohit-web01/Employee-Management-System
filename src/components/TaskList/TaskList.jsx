import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  // console.log("value of data in TaskList: ", data);
  return (
    <div id="tasklist" className="h-[55%] flex overflow-x-auto flex-nowrap items-center justify-start gap-5 py-5 mt-10 w-full">

    {data.tasks.map((e, idx)=>{
      if(e.active){
        return <AcceptTask key={idx} data={e}/>
      }

      if(e.newTask){
        return <NewTask key={idx} data={e}/>
      }

      if(e.completed){
        return <CompleteTask key={idx} data={e}/>
      }

      if(e.failed){
        return <FailedTask key={idx} data={e}/>
      }
    })}

      {/* <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask /> */}
    </div>
  );
};

export default TaskList;
