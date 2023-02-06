import { FaTimes } from "react-icons/fa";
import TaskList from "./TaskList";

const Task = ({ task, onDelete, toggleStatus }) => {
  return (
    <div
      className={`Task ${task.status && "Reminder"}`}
      onDoubleClick={() => toggleStatus(task.id)}
    >
      <h5>Task #{task.id}</h5>
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <h5>{task.dueDate}</h5>
      <p>{task.description ? task.description : "N/A"}</p>
    </div>
  );
};

export default Task;
