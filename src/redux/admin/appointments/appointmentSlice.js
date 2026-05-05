// src/redux/admin/appointments/appointmentSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  mockAppointments,
  mockAppointmentStats,
  mockTopDoctors,
  mockAppointmentTypes,
} from "../../../data/adminMockData";

export const fetchAdminAppointments = createAsyncThunk(
  "adminAppointments/fetchAdminAppointments",
  async () => {
    return {
      appointments: mockAppointments,
      stats: mockAppointmentStats,
      topDoctors: mockTopDoctors,
      appointmentTypes: mockAppointmentTypes,
    };
  }
);

const appointmentSlice = createSlice({
  name: "adminAppointments",
  initialState: {
    appointments: [],
    stats: [],
    topDoctors: [],
    appointmentTypes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminAppointments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = action.payload.appointments;
        state.stats = action.payload.stats;
        state.topDoctors = action.payload.topDoctors;
        state.appointmentTypes = action.payload.appointmentTypes;
      })
      .addCase(fetchAdminAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default appointmentSlice.reducer;