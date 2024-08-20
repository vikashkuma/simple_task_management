// src/components/TaskBoard/TaskBoard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './TaskBoard.css';

const TaskBoard = ({ tasks=[], onDelete }) => {
    if (tasks?.length === 0) {
        return <h2>No Tasks Created.</h2>;
    }
    
  return (
    <div className="task-board">
      {tasks.map((task) => (
        <Card key={task.id} className="task-card">
          <CardContent>
            <Typography variant="h5">{task.name}</Typography>
            <div className="task-action">
              <Link to={`/tasks/${task.id}`}>View Details</Link>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: '10px', marginLeft: '10px' }}
                onClick={() => onDelete(task.id)}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TaskBoard;
