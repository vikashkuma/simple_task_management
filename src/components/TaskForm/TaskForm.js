// src/components/TaskForm/TaskForm.js
import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import './TaskForm.css';

const TaskForm = ({ task, onSubmit }) => {
  const [taskData, setTaskData] = useState({
    name: '',
    description: '',
    deadline: '',
  });

  useEffect(() => {
    if (task) {
      setTaskData(task);
    }
  }, [task]);

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(taskData);
    setTaskData({ name: '', description: '', deadline: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <TextField
        label="Task Name"
        name="name"
        value={taskData.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Description"
        name="description"
        value={taskData.description}
        onChange={handleChange}
        multiline
        rows={4}
      />
      <TextField
        label="Deadline"
        name="deadline"
        type="date"
        value={taskData.deadline}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" color="primary" type="submit">
        {task ? 'Update Task' : 'Save Task'}
      </Button>
    </form>
  );
};

export default TaskForm;
