import TodoItem from "./TodoItem";
import styles from "./../styles/TodoList.module.css";


const TodoList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div className={styles.todoListContainer}>
      {tasks.length === 0 ? (
        <p className={styles.emptyMessage}>No hay tareas aún</p>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
