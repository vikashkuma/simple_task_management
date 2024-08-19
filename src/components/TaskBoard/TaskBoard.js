// src/components/TaskBoard/TaskBoard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

const TaskBoard = ({ tasks }) => {
  return (
    <div>
      <Typography variant="h4">Task Board</Typography>
      {tasks.map((task) => (
        <Card key={task.id} style={{ margin: '16px 0' }}>
          <CardContent>
            <Typography variant="h5">{task.name}</Typography>
            <Link to={`/tasks/${task.id}`}>View Details</Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TaskBoard;
