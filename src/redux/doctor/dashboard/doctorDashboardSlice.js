
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../api/apiHandler";

export const fetchDoctorDashboard = createAsyncThunk(
  "doctorDashboard/fetchDoctorDashboard",
  async () => {
    return await getData("/doctor/dashboard");
  }
);

const doctorDashboardSlice = createSlice({
  name: "doctorDashboard",

  initialState: {
    header: {},
    stats: [],
    recentActivity: [],
    upcomingAppointments: [],
    weeklyStats: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctorDashboard.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchDoctorDashboard.fulfilled, (state, action) => {
        state.loading = false;

        state.header = action.payload.header;
        state.stats = action.payload.stats;
        state.recentActivity = action.payload.recentActivity;
        state.upcomingAppointments =
          action.payload.upcomingAppointments;
        state.weeklyStats = action.payload.weeklyStats;
      })

      .addCase(fetchDoctorDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default doctorDashboardSlice.reducer;

