// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskListPage from './pages/TaskListPage';
import TaskDetailPage from './pages/TaskDetailPage';
import AddTaskPage from './pages/AddTaskPage';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Task List</Link> | <Link to="/add-task">Add Task</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/tasks/:id" element={<TaskDetailPage />} />
        <Route path="/add-task" element={<AddTaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
