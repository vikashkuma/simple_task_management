// src/components/TaskDetail/TaskDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
      <Link to={`/tasks/${id}/edit`} style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="secondary" style={{ marginTop: '20px' }}>
          Edit Task
        </Button>
      </Link>
    </div>
  );
};

export default TaskDetail;
