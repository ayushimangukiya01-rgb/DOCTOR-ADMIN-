// src/redux/admin/doctors/doctorSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mockDoctors, mockDoctorStats } from "../../../data/adminMockData";

export const fetchAdminDoctors = createAsyncThunk(
  "adminDoctors/fetchAdminDoctors",
  async () => {
    return {
      doctors: mockDoctors,
      stats: mockDoctorStats,
    };
  }
);

const doctorSlice = createSlice({
  name: "adminDoctors",
  initialState: {
    doctors: [],
    stats: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload.doctors;
        state.stats = action.payload.stats;
      })
      .addCase(fetchAdminDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default doctorSlice.reducer;