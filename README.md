# 📝 To-Do App

A modern, minimalist **To-Do App** built with **React**, designed with a strong focus on visual experience and component-based CSS organization. It includes full support for **light and dark mode**, toggleable with a smooth sun/moon icon animation.

---

## ✨ Features

- ✅ Easily add and delete tasks
- 🌗 Light and dark mode with animated toggle (sun/moon)
- 🎨 Modular component styling with `*.module.css`
- ⚙️ Dedicated dark mode styles via `DarkMode.css`
- 🧠 Clean, responsive and accessible UI

---

## 🧱 Project Structure

```
src/
│
├── components/
│   ├── TaskForm.jsx          # Form to add tasks
│   ├── TodoItem.jsx          # Individual task display
│   ├── TodoList.jsx          # Task list component
│
├── styles/
│   ├── App.css               # Global styles
│   ├── DarkMode.css          # Styles exclusive to dark mode
│   ├── TaskForm.module.css   # TaskForm styles
│   ├── TodoItem.module.css   # TodoItem styles
│   ├── TodoList.module.css   # TodoList styles
│
├── App.jsx                   # Main logic and dark mode toggle
└── main.jsx                  # App entry point
```

---

## 🚀 How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/Andrew552004/TASK-APP
   ```

2. Move into the project folder:
   ```bash
   cd to-do-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the app:
   ```bash
   npm run dev
   ```

---

## 📄 License


This project is licensed under the [MIT License](LICENSE).  
You are free to use, modify, and distribute this project with proper attribution.