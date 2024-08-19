import React, { useState, useEffect } from 'react';
import TaskBoard from '../components/TaskBoard/TaskBoard';
import {getTasksFromLocalStorage} from '../utils/localStorage'

const TaskListPage = () => {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage('tasks'));

  useEffect(() => {
    // Fetch tasks once on mount
    const storedTasks = getTasksFromLocalStorage('tasks');
    if (storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []);

  return (
    <div>
      <TaskBoard tasks={tasks} />
    </div>
  );
};

export default TaskListPage;
