// src/hooks/useTasks.js
import { useState, useEffect } from 'react';
import { saveToLocalStorage, getFromLocalStorage } from '../utils/localStorage';

export const useTasks = () => {
  const [tasks, setTasks] = useState(getFromLocalStorage('tasks'));

  useEffect(() => {
    const storedTasks = getFromLocalStorage('tasks') || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    saveToLocalStorage('tasks', tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  return {
    tasks,
    addTask,
  };
};
