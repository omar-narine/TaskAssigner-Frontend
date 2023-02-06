import Task from "./Task";
import { useState } from "react";

const TaskList = ({ tasks, onDelete, toggleStatus }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          toggleStatus={toggleStatus}
        />
      ))}
    </>
  );
};

export default TaskList;
