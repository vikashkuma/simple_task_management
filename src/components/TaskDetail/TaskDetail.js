// src/components/TaskDetail/TaskDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import './TaskDetail.css';

const TaskDetail = ({ tasks }) => {
  const { id } = useParams();
  const task = tasks.find((task) => String(task.id) === id);

  return (
    <div className="task-detail">
      <Typography variant="h4">{task.name}</Typography>
      <Typography variant="body1">{task.description}</Typography>
      <Typography variant="body2">Deadline: {task.deadline}</Typography>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Edit Task
      </Button>
    </div>
  );
};

export default TaskDetail;
