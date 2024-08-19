// src/components/TaskBoard/TaskBoard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import './TaskBoard.css';

const TaskBoard = ({ tasks=[] }) => {
    if (tasks?.length === 0) {
        return <h2>No Tasks Created.</h2>;
    }
    
  return (
    <div className="task-board">
      {tasks.map((task) => (
        <Card key={task.id} className="task-card">
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
