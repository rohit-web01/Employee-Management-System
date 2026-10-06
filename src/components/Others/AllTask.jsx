import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  return (
    <div className="bg-[#1c1c1c] h-[35] overflow-auto rounded mt-5 p-5">
      <div className="bg-purple-600 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div className="h-[45] bg-black overflow-auto">
        {authData.employees.map((e,idx) => {
          return (
            <div key={idx} className="overflow-auto border-2 border-emerald-600 mb-2 flex justify-between rounded py-2 px-4">
              <h2 className="text-lg font-medium w-1/5 text-blue-600">
                {e.firstName}
              </h2>
              <h3 className="text-lg font-medium w-1/5 text-yellow-600">
                {e.taskCount.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-white">
                {e.taskCount.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-green-600">
                {e.taskCount.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">
                {e.taskCount.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
