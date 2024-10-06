import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTasks } from '../actions/tasks';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};

export default TaskList;
