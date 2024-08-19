// src/components/TaskForm/TaskForm.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './TaskForm.css';

const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState({
    name: '',
    description: '',
    deadline: '',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({ name: '', description: '', deadline: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <TextField
        label="Task Name"
        name="name"
        value={task.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Description"
        name="description"
        value={task.description}
        onChange={handleChange}
        multiline
        rows={4}
      />
      <TextField
        label="Deadline"
        name="deadline"
        type="date"
        value={task.deadline}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" color="primary" type="submit">
        Save Task
      </Button>
    </form>
  );
};

export default TaskForm;
