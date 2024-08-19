// src/pages/EditTaskPage.js
import React from 'react';
import TaskForm from '../components/TaskForm/TaskForm';
import { useTasks } from '../hooks/useTasks';
import { useParams, useNavigate } from 'react-router-dom';

const EditTaskPage = () => {
  const { id } = useParams();
  const { tasks, updateTask } = useTasks();
  const navigate = useNavigate();
  const task = tasks.find((task) => String(task.id) === id);

  const handleUpdate = (updatedTask) => {
    updateTask(id, updatedTask);
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <TaskForm task={task} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditTaskPage;
