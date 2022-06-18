import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: 'london',
  fulltime: false,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterByLocation: (state, action) => {
      state.location = action.payload;
    },
    filterByEmploymentType: (state, action) => {
      state.fulltime = action.payload;
    },
  },
});

export const { filterByLocation, filterByEmploymentType } = filterSlice.actions;

export default filterSlice.reducer;
