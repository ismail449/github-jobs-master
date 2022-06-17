import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { url, requestOptions } from '../../../apiKey';

const initialState = {
  jobs: [],
};

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async (options) => {
  const { fulltime, location, searchInput } = options;
  try {
    let employmentType = '';
    if (fulltime) {
      employmentType = '&employment_type=full+time';
    }
    const response = await fetch(
      `${url}location=${location}&search=${searchInput}&sort_by=relevance${employmentType}`,
      requestOptions,
    );
    const jobs = await response.json();
    return jobs.results;
  } catch (error) {
    console.log(error);
  }
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.jobs = action.payload;
    });
  },
});

export default jobsSlice.reducer;
