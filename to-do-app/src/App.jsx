import { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <div className="header">
        <button className="toggle-mode" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
        </button>
      </div>
      <h1>📌 Aplicación de Tareas</h1>
      <TodoList />
    </div>
  );
}

export default App;
