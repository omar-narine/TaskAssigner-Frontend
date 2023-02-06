import Header from "./Header";
import Button from "./Button";
import AddTasksForm from "./AddTasksForm";
import TaskList from "./TaskList";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AdminPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  // Function called when clicking submit task button
  const addTask = async (submitTask) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(submitTask),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
    //const id = tasks.length + 1;
    //const newTask = { id, ...submitTask };
    //setTasks([...tasks, newTask]);
    console.log(submitTask);
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
    console.log("Delete", id);
  };

  const toggleStatus = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTasks = {
      ...taskToToggle,
      taskStatus: !taskToToggle.taskStatus,
    };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTasks),
    });

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, taskStatus: data.taskStatus } : task
      )
    );

    // setTasks(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, status: !task.status } : task
    //   )
    // );
    // console.log("Status Changed", id);
    // console.log(tasks);
  };

  // Back Button Navigation Information
  const navigate = useNavigate();
  const onBackClick = () => {
    navigate("/");
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
