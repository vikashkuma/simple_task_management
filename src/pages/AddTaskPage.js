// src/pages/AddTaskPage.js
import React from 'react';
import TaskForm from '../components/TaskForm/TaskForm';
import { useTasks } from '../hooks/useTasks';

const AddTaskPage = () => {
  const { addTask } = useTasks();

  return (
    <div>
      <h1>Add New Task</h1>
      <TaskForm onSubmit={addTask} />
    </div>
  );
};

export default AddTaskPage;
