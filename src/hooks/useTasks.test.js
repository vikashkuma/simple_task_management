import { renderHook, act } from '@testing-library/react-hooks';
import { useTasks } from './useTasks';
import * as localStorageUtils from '../utils/localStorage';

jest.mock('../utils/localStorage');

describe('useTasks Hook', () => {
  beforeEach(() => {
    // Mock the localStorage utility functions
    localStorageUtils.getTasksFromLocalStorage.mockReturnValue([]);
    localStorageUtils.saveTasksToLocalStorage.mockClear();
  });

  test('initially loads tasks from local storage', () => {
    const initialTasks = [{ id: '1', name: 'Task 1', description: 'Description 1', deadline: '2024-09-01' }];
    localStorageUtils.getTasksFromLocalStorage.mockReturnValue(initialTasks);

    const { result } = renderHook(() => useTasks());

    expect(result.current.tasks).toEqual(initialTasks);
  });

  test('adds a new task', () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask({ name: 'New Task', description: 'New Description', deadline: '2024-09-01' });
    });

    expect(result.current.tasks.length).toBe(1);
    expect(result.current.tasks[0].name).toBe('New Task');
    expect(localStorageUtils.saveTasksToLocalStorage).toHaveBeenCalledWith('tasks', result.current.tasks);
  });

  test('updates an existing task', async () => {
    const initialTasks = [{ id: '1', name: 'Task 1', description: 'Description 1', deadline: '2024-09-01' }];
    localStorageUtils.getTasksFromLocalStorage.mockReturnValue(initialTasks);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.updateTask('1', { name: 'Updated Task', description: 'Updated Description' });
    });

    expect(result.current.tasks.length).toBe(1);
    expect(result.current.tasks[0].name).toBe('Updated Task');
    expect(result.current.tasks[0].description).toBe('Updated Description');
    expect(localStorageUtils.saveTasksToLocalStorage).toHaveBeenCalledWith('tasks', result.current.tasks);
  });

  test('deletes a task', () => {
    const initialTasks = [{ id: '1', name: 'Task 1', description: 'Description 1', deadline: '2024-09-01' }];
    localStorageUtils.getTasksFromLocalStorage.mockReturnValue(initialTasks);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.deleteTask('1');
    });

    expect(result.current.tasks.length).toBe(0);
    expect(localStorageUtils.saveTasksToLocalStorage).toHaveBeenCalledWith('tasks', []);
  });
});
