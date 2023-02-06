import React, { useState } from "react";

const AddTasksForm = ({ onTaskSubmit }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!taskTitle) {
      alert("Please Enter the Task Information!");
      return;
    }

    onTaskSubmit({ taskTitle, taskDueDate, taskDescription, taskStatus });

    setTaskTitle("");
    setTaskDueDate("");
    setTaskDescription("");
  };

  return (
    <form className="TaskInputField" onSubmit={onSubmit}>
      <div>
        <label>Task Title:</label>
        <input
          className={"TaskInputField"}
          type={"text"}
          placeholder={"Enter Task Name"}
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        ></input>
      </div>
      <div>
        <label className="TextInputFieldLabe">Due Date:</label>
        <input
          className={"TaskInputField"}
          type={"text"}
          placeholder={"Enter Task Deadline"}
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Task Description:</label>
        <input
          className={"TaskInputField"}
          type={"text"}
          placeholder={"Enter Task Details"}
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></input>
      </div>

      <input className="SubmitButton" type="submit" value="Submit Task"></input>
    </form>
  );
};

export default AddTasksForm;
