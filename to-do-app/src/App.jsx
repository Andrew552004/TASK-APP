import { useState } from "react";
import TodoList from "./components/TodoList";
import TaskForm from "./components/TaskForm";
import "./styles/App.css";
import "./styles/DarkMode.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now(), completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <div className="top-bar">
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon moon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 12.79A9 9 0 0111.21 3a7 7 0 108.58 9.79z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon sun"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm6.36 3.64a1 1 0 010 1.41l-.7.7a1 1 0 01-1.41-1.41l.7-.7a1 1 0 011.41 0zM21 11h-1a1 1 0 100 2h1a1 1 0 100-2zm-3.64 6.36a1 1 0 00-1.41 0l-.7.7a1 1 0 001.41 1.41l.7-.7a1 1 0 000-1.41zM13 21v-1a1 1 0 10-2 0v1a1 1 0 102 0zM4.93 4.93a1 1 0 000 1.41l.7.7a1 1 0 101.41-1.41l-.7-.7a1 1 0 00-1.41 0zM4 11H3a1 1 0 100 2h1a1 1 0 100-2zm3.64 6.36a1 1 0 00-1.41 1.41l.7.7a1 1 0 001.41-1.41l-.7-.7zM16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>
      </div>

      <h1>📌 Aplicación de Tareas</h1>
      <TaskForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
