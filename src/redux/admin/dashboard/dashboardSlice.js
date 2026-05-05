// src/redux/admin/dashboard/dashboardSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  mockAdminSummaryCards,
  mockPlatformActivities,
  mockQuickActions,
  mockDoctorRequests,
  mockTodayAppointments,
} from "../../../data/adminMockData";

export const fetchDashboard = createAsyncThunk(
  "adminDashboard/fetchDashboard",
  async () => {
    return {
      summaryCards: mockAdminSummaryCards,
      platformActivities: mockPlatformActivities,
      quickActions: mockQuickActions,
      doctorRequests: mockDoctorRequests,
      todayAppointments: mockTodayAppointments,
    };
  }
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
        state.summaryCards = action.payload.summaryCards;
        state.platformActivities = action.payload.platformActivities;
        state.quickActions = action.payload.quickActions;
        state.doctorRequests = action.payload.doctorRequests;
        state.todayAppointments = action.payload.todayAppointments;
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;