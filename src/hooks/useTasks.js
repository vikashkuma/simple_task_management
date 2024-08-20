// src/hooks/useTasks.js
import { useState, useEffect } from 'react';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from '../utils/localStorage';

export const useTasks = () => {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage('tasks') ?? []);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now().toString() };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasksToLocalStorage('tasks', updatedTasks);
  };

  const updateTask = async (id, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      String(task.id) === id ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage('tasks', updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasksToLocalStorage('tasks',updatedTasks);
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask
  };
};
