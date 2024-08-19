// src/pages/TaskDetailPage.js
import React from 'react';
import TaskDetail from '../components/TaskDetail/TaskDetail';
import { useTasks } from '../hooks/useTasks';

const TaskDetailPage = () => {
  const { tasks } = useTasks();

  return (
    <div>
      <h1>Task Detail</h1>
      <TaskDetail tasks={tasks} />
    </div>
  );
};

export default TaskDetailPage;
