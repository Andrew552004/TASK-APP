const TodoItem = ({ task, toggleComplete, deleteTask }) => {
    return (
      <div className="task">
        <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.text} - <small>{task.date}</small>
        </span>
        <button onClick={() => deleteTask(task.id)}>❌</button>
      </div>
    );
  };
  
  export default TodoItem;
  