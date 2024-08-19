// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskBoard from './components/TaskBoard/TaskBoard';
import TaskDetail from './components/TaskDetail/TaskDetail';
import TaskForm from './components/TaskForm/TaskForm';
import { useTasks } from './hooks/useTasks';

function App() {
  const { tasks, addTask } = useTasks();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskBoard tasks={tasks} />} />
        <Route path="/tasks/:id" element={<TaskDetail tasks={tasks} />} />
      </Routes>
      <TaskForm onSubmit={addTask} />
    </Router>
  );
}

export default App;
