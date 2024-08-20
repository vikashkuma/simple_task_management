import React, { useState, useEffect } from 'react';
import TaskBoard from '../components/TaskBoard/TaskBoard';
import {getTasksFromLocalStorage} from '../utils/localStorage';
import { useTasks } from '../hooks/useTasks';

const TaskListPage = () => {
  const {tasks, deleteTask} = useTasks();
  const [taskList, setTaskList] = useState(tasks);

  useEffect(() => {
      setTaskList(tasks);
  }, [tasks]);

  const onDeleteTask = (id) => {
    deleteTask(id);
    setTaskList(tasks);
  }

  return (
    <div>
      <TaskBoard tasks={taskList} onDelete={onDeleteTask}/>
    </div>
  );
};

export default TaskListPage;
