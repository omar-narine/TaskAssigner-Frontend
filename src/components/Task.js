import { FaTimes } from "react-icons/fa";
import TaskList from "./TaskList";

const Task = ({ task, onDelete, toggleStatus }) => {
  return (
    <div
      className={`Task ${task.taskStatus && "Reminder"}`}
      onDoubleClick={() => toggleStatus(task.id)}
    >
      <h5>Task #{task.id}</h5>
      <h3>
        {task.taskTitle}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <h5>{task.taskDueDate}</h5>
      <p>{task.taskDescription ? task.taskDescription : "N/A"}</p>
    </div>
  );
};

export default Task;
