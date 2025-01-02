import { configureStore } from '@reduxjs/toolkit';
import slice from './todosSlice';

const store = configureStore({
  reducer: {
    job: slice,
  },
});

export default store;