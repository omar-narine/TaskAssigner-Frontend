import Header from "./Header";
import Button from "./Button";
import TaskList from "./TaskList";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const StudentPage = () => {
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

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

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

  // Back Button Routing Information
  const navigate = useNavigate();
  const onBackClick = () => {
    navigate("/");
  };

  return (
    <div className="StudentPage">
      {/* Header for the Student Page */}
      <Header HeaderText={"Student Portal"} />
      <Button className={"BackButton"} text={"Back"} onClick={onBackClick} />
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

export default StudentPage;
