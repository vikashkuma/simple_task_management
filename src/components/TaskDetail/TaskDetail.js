// src/components/TaskDetail/TaskDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

const TaskDetail = ({ tasks }) => {
  const { id } = useParams();
  const task = tasks.find((task) => task.id === parseInt(id, 10));

  if (!task) return <Typography variant="h6">Task not found</Typography>;

  return (
    <Card style={{ margin: '16px 0' }}>
      <CardContent>
        <Typography variant="h4">{task.name}</Typography>
        <Typography variant="body1">{task.description}</Typography>
        <Typography variant="body1">Deadline: {task.deadline}</Typography>
      </CardContent>
    </Card>
  );
};

export default TaskDetail;
