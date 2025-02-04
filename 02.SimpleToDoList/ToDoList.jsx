import { useState } from "react";
import "./ToDoList.css"; // 

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleAdd(e) {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
     
    }
  }

  function handleDelete(index) {
    const updatedTasks = tasks.filter((_, id) => id !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="todo-container">
      <input
        type="text"
        placeholder="Add Task..."
        onChange={handleChange}
        value={task}
        className="todo-input"
      />
      <button onClick={handleAdd} className="add-button">Add Task</button>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button onClick={() => handleDelete(index)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
