import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://6713523e6c5f5ced662609a7.mockapi.io/todo';


export const fetchJobs = createAsyncThunk('job/fetchJobs', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addJob = createAsyncThunk('job/addJob', async (job) => {
  const response = await axios.post(API_URL, job);
  return response.data;
});


//Chứa các reducers và actions cho job
const todoSlice = createSlice({
  name: 'job',
  initialState: {
    jobs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      })
  },
});

export default todoSlice.reducer;