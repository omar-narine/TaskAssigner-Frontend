import Header from "./Header";
import Button from "./Button";
import AddTasksForm from "./AddTasksForm";
import TaskList from "./TaskList";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminPage = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      dueDate: "Feb 5th at 2:30 PM",
      description: "",
      status: false,
    },
    {
      id: 2,
      text: "Meeting at School",
      dueDate: "Feb 6th at 1:30 PM",
      description: "Meeting discussing removal of De Jesus",
      status: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      dueDate: "Feb 5th at 3:30 PM",
      description: "Apples, Pears, Tomatoes, Onions, Chicken, etc.",
      status: false,
    },
  ]);

  // Back Button Navigation Information
  const navigate = useNavigate();
  const onBackClick = () => {
    navigate("/");
  };

  // Function called when clicking submit task button
  const addTask = (newTask) => {
    console.log(newTask);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("Delete", id);
  };

  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
    console.log("Status Changed", id);
    console.log(tasks);
  };

  return (
    <div className="AdminPage">
      {/* Header for the Admin Page */}
      <Header HeaderText={"Administrative Panel"} />
      <Button className="BackButton" text={"Back"} onClick={onBackClick} />
      <AddTasksForm onTaskSubmit={addTask} />

      {/* Due to some weird formatting of the page, these empty headers are used for spacing */}
      <h3> </h3>
      <h3> </h3>
      <h3> </h3>
      <h3> </h3>
      <h3> </h3>
      <h3> </h3>
      <h3> </h3>
      <h3> </h3>
      <h3> </h3>
      {tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          toggleStatus={toggleStatus}
        />
      ) : (
        "Currently No Tasks Assigned"
      )}
    </div>
  );
};

const tasks = [
  {
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 2:30 PM",
    description: "",
    status: false,
  },
  {
    id: 2,
    text: "Meeting at School",
    day: "Feb 6th at 1:30 PM",
    description: "Meeting discussing removal of De Jesus",
    status: true,
  },
  {
    id: 3,
    text: "Food Shopping",
    day: "Feb 5th at 3:30 PM",
    description: "Apples, Pears, Tomatoes, Onions, Chicken, etc.",
    status: false,
  },
];

export default AdminPage;
