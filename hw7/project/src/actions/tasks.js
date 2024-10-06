import { createAsyncThunk } from '@reduxjs/toolkit';
import tasks from '../data/tasks';

export const loadTasks = createAsyncThunk(
  'tasks/loadTasks',
  async () => {
    // Симулируем асинхронное поведение с помощью setTimeout
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(tasks);
      }, 2000); // 2 секунды задержки
    });
  }
);