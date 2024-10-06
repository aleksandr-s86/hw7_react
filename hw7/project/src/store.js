import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    tasks: (state = [], action) => {
      switch (action.type) {
        case 'tasksLoaded':
          return action.payload;
        default:
          return state;
      }
    },
  },
});

export default store;