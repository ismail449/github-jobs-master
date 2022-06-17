import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './features/filter/filterSlice';
import jobsReducer from './features/jobs/jobsSlice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    jobs: jobsReducer,
  },
})

export default store