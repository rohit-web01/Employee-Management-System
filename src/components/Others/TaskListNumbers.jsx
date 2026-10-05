import React from "react";

const TaskListNumbers = ({data}) => {
  return (
    <div className="flex mt-10 screen justify-between gap-5 ">
      <div className="py-6 px-9 rounded-xl w-[45%] bg-blue-500">
        <h2 className="text-3xl font-bold">{data.taskCount.newTask}</h2>
        <h3 className="text-xl mt-0.5 font-medium">New Task</h3>
      </div>
      <div className="py-6 px-9 rounded-xl w-[45%] bg-green-500">
        <h2 className="text-3xl font-bold">{data.taskCount.completed}</h2>
        <h3 className="text-xl mt-0.5 font-medium">Completed Task</h3>
      </div>
      <div className="py-6 px-9 rounded-xl w-[45%] bg-yellow-600">
        <h2 className="text-3xl text-black font-bold">{data.taskCount.active}</h2>
        <h3 className="text-xl text-black mt-0.5 font-medium">Accepted Task</h3>
      </div>
      <div className="py-6 px-9 rounded-xl w-[45%] bg-red-500">
        <h2 className="text-3xl font-bold">{data.taskCount.failed}</h2>
        <h3 className="text-xl mt-0.5 font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
