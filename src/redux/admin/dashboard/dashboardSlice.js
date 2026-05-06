import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../api/apiHandler";

export const fetchDashboard = createAsyncThunk(
  "adminDashboard/fetchDashboard",
  async () => await getData("/admin/dashboard")
);

const dashboardSlice = createSlice({
  name: "adminDashboard",
  initialState: {
    summaryCards: [],
    platformActivities: [],
    quickActions: [],
    doctorRequests: [],
    todayAppointments: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading = false;
        Object.assign(state, action.payload);
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;