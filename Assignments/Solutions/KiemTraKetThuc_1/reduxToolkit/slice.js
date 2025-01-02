import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBikes = createAsyncThunk('bike/fetchBike', async () => {
  const response = await axios.get('https://6713523e6c5f5ced662609a7.mockapi.io/Bike');
  return response.data;
});

// Hàm async thunk để thêm xe đạp mới
export const addBike = createAsyncThunk('bike/addBike', async (newBike, { dispatch }) => {
  const response = await axios.post('https://6713523e6c5f5ced662609a7.mockapi.io/Bike', newBike);
  // Refetch the bike list after adding a new bike
  dispatch(fetchBikes());
  return response.data;
});

const bikeSlice = createSlice({
  name: 'bike',
  initialState: {
    bikes: [],
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBikes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bikes = action.payload;
      })
      .addCase(fetchBikes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Xử lý khi thêm xe đạp
      .addCase(addBike.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addBike.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(addBike.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bikeSlice.reducer;
