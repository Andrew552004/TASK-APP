import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() && taskDate) {
      addTask({ text: taskText, date: taskDate });
      setTaskText("");
      setTaskDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="task-input" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
        placeholder="Nueva tarea..." 
      />
      <input 
        type="date" 
        className="date-input" 
        value={taskDate} 
        onChange={(e) => setTaskDate(e.target.value)} 
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskForm;
