import React from "react";
import styles from "./../styles/TodoItem.module.css";

const TodoItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div
      className={`${styles.taskItem} ${task.completed ? styles.completed : ""}`}
    >
      <span onClick={() => toggleComplete(task.id)}>
        {task.text} - {task.date}
      </span>
      <button onClick={() => deleteTask(task.id)} className={styles.deleteBtn}>
        Eliminar
      </button>
    </div>
  );
};

export default TodoItem;
