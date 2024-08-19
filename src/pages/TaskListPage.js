// src/pages/TaskListPage.js
import React from 'react';
import TaskBoard from '../components/TaskBoard/TaskBoard';
import { useTasks } from '../hooks/useTasks';

const TaskListPage = () => {
  const { tasks } = useTasks();

  return (
    <div>
      <h1>Task List</h1>
      <TaskBoard tasks={tasks} />
    </div>
  );
};

export default TaskListPage;
