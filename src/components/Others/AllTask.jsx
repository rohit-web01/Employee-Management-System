import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData.employees);

  return (
    <div className="bg-[#1c1c1c] rounded mt-5 p-5">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div>
        {authData.employees.map((e) => {
          return (
            <div className="border-2 border-emerald-600 mb-2 flex justify-between rounded py-2 px-4">
              <h2 className="text-lg font-medium w-1/5 text-blue-600">
                {e.firstName}
              </h2>
              <h3 className="text-lg font-medium w-1/5 text-yellow-600">
                {e.tasks.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-white">
                {e.tasks.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-green-600">
                {e.tasks.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">
                {e.tasks.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
