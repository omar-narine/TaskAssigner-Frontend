import Task from "./Task";
import { useState } from "react";

const TaskList = ({ tasks, onDelete, toggleStatus }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          toggleStatus={toggleStatus}
        />
      ))}
    </>
  );
};

export default TaskList;
