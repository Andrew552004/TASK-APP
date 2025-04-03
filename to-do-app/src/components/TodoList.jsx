import { useState } from "react";
import TodoItem from "./TodoItem";
import TaskForm from "./TaskForm";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), ...newTask, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <TaskForm addTask={addTask} />
      <div>
        {tasks.map(task => (
          <TodoItem key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
