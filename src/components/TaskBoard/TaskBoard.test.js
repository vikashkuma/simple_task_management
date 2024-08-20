import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TaskBoard from './TaskBoard';

describe('TaskBoard Component', () => {
  const mockDeleteTask = jest.fn();

  beforeEach(() => {
    mockDeleteTask.mockClear();
  });

  test('displays "No Tasks Created." when there are no tasks', () => {
    render(
      <Router>
        <TaskBoard tasks={[]} onDelete={mockDeleteTask} />
      </Router>
    );

    expect(screen.getByText('No Tasks Created.')).toBeInTheDocument();
  });

  test('renders list of tasks', () => {
    const tasks = [
      { id: '1', name: 'Task 1', description: 'Description 1', deadline: '2024-09-01' },
      { id: '2', name: 'Task 2', description: 'Description 2', deadline: '2024-09-02' }
    ];

    render(
      <Router>
        <TaskBoard tasks={tasks} onDelete={mockDeleteTask} />
      </Router>
    );

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getAllByText('View Details').length).toBe(2);
  });

  test('triggers onDelete when delete button is clicked', () => {
    const tasks = [
      { id: '1', name: 'Task 1', description: 'Description 1', deadline: '2024-09-01' }
    ];

    render(
      <Router>
        <TaskBoard tasks={tasks} onDelete={mockDeleteTask} />
      </Router>
    );

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    expect(mockDeleteTask).toHaveBeenCalledTimes(1);
    expect(mockDeleteTask).toHaveBeenCalledWith('1');
  });

  test('renders "View Details" link correctly', () => {
    const tasks = [
      { id: '1', name: 'Task 1', description: 'Description 1', deadline: '2024-09-01' }
    ];

    render(
      <Router>
        <TaskBoard tasks={tasks} onDelete={mockDeleteTask} />
      </Router>
    );

    const viewDetailsLink = screen.getByText('View Details');
    expect(viewDetailsLink).toBeInTheDocument();
    expect(viewDetailsLink.getAttribute('href')).toBe('/tasks/1');
  });
});
