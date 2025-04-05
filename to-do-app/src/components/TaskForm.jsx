import { useState } from "react";
import styles from "./../styles/TaskForm.module.css";

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
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.taskInput}
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Nueva tarea..."
        />
        <input
          type="date"
          className={styles.dateInput}
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />
        <button type="submit" className={styles.button}>Agregar</button>
      </div>
    </form>
  );
};

export default TaskForm;
