import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../api/apiHandler";

export const fetchDoctorAvailability = createAsyncThunk(
  "doctorAvailability/fetchDoctorAvailability",
  async () => {
    return await getData("/doctor/availability");
  }
);

const doctorAvailabilitySlice = createSlice({
  name: "doctorAvailability",
  initialState: {
    activeDays: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctorAvailability.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctorAvailability.fulfilled, (state, action) => {
        state.loading = false;
        Object.assign(state, action.payload);
      })
      .addCase(fetchDoctorAvailability.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default doctorAvailabilitySlice.reducer;