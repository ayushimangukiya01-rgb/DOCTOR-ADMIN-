import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../api/apiHandler";

export const fetchDoctorEarnings = createAsyncThunk(
  "doctorEarnings/fetchDoctorEarnings",
  async () => {
    return await getData("/doctor/earnings");
  }
);

const doctorEarningsSlice = createSlice({
  name: "doctorEarnings",
  initialState: {
    summaryItems: [],
    revenueChart: [],
    transactions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctorEarnings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctorEarnings.fulfilled, (state, action) => {
        state.loading = false;
        Object.assign(state, action.payload);
      })
      .addCase(fetchDoctorEarnings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default doctorEarningsSlice.reducer;