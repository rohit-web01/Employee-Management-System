import React from "react";

const TaskList = ({data}) => {
  console.log('value of data in TaskList: ',data)
  return (
    <div
      id="tasklist"
      className="h-[55%] flex overflow-x-auto flex-nowrap items-center justify-start gap-5 py-5 mt-10 w-full"
    >
      <div className="h-full p-5 w-75 bg-red-400 rounded-xl shrink-0">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
          sed. Quidem explicabo sit molestias magnam.
        </p>
      </div>
      <div className="h-full p-5 w-75 bg-blue-400 rounded-xl shrink-0">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
          sed. Quidem explicabo sit molestias magnam.
        </p>
      </div>
      <div className="h-full p-5 w-75 bg-green-400 rounded-xl shrink-0">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
          sed. Quidem explicabo sit molestias magnam.
        </p>
      </div>
      <div className="h-full p-5 w-75 bg-yellow-400 rounded-xl shrink-0">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
          sed. Quidem explicabo sit molestias magnam.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
